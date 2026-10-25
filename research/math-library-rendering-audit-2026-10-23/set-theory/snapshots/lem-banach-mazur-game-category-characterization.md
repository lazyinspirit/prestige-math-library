---
id: lem-banach-mazur-game-category-characterization
kind: lemma
title: "Category-game strategies characterize meagreness and local comeagreness"
status: published
origin: pipeline
deps: ["def-banach-mazur-category-game", "def-nowhere-dense-meagre-and-residual-subsets", "thm-recursion"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "complete three claims following Definition 7.7, pp23–24; Proposition 7.1 p21; complete relevant proof read 2026-09-09. Rational-interval version proved locally."
      url: "https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf"
---
## Statement

In ZF, for $X=\mathbb N^{\mathbb N},2^{\mathbb N}$ or $\mathbb R$, II has a winning category-game strategy with target A iff A is meagre in X. I has a winning strategy iff A is comeagre in some nonempty basic open. Both assertions hold relative to a fixed nonempty basic open. Each winning strategy gives a specified sequence of closed nowhere dense witnesses for the asserted meagre set. No nonempty basic open is meagre in itself. No determinacy, AC or DC is assumed.

## Facts & Assumptions

[F1] [[def-banach-mazur-category-game]] supplies natural-number codes, legal refinements and the unique resulting point.

[F2] [[def-nowhere-dense-meagre-and-residual-subsets]] defines nowhere dense, meagre and comeagre sets by an actual covering sequence.

[F3] [[thm-recursion]] supplies recursion on a set with a specified successor function.

## Proof

**Given:** One of the three spaces with its fixed countable basis and game conventions.

1.1 Replace any specified nowhere dense witnesses by their closures, still nowhere dense by F2. If $A\subseteq\bigcup_n F_n$ with these closed witnesses, on II's nth turn choose the least legal refinement avoiding F_n. Such a refinement exists because the preceding move open has a nonempty open part outside F_n, and F1 permits arbitrarily small basic refinements there. The resulting point lies in all chosen opens, so avoids every F_n and A. Thus this is a winning II strategy. Define legal defaults at inconsistent histories by least codes. [F1, F2]

1.2 Conversely fix a winning II strategy $\tau$. For each even-length legal history p consistent with it let V_p be its last move open, or X at the empty history, and set

$$D_p=(X\setminus\overline{V_p})\ \cup\!\bigcup_{W\text{ legal next at }p}\tau(p^\frown W),$$

where the strategy value denotes its response open. This is open. If a nonempty open O meets V_p, choose a legal basic W with closure (or cylinder) inside $O\cap V_p$, small enough for the present turn; its response is a nonempty open inside O and D_p. If O misses V_p but had no point outside its closure, O would be an open subset of its boundary, impossible since every open meeting the closure of an open meets that open. Thus O meets D_p in either case. Hence $F_p=X\setminus D_p$ is closed nowhere dense. [F1, F2]

2.1 Enumerate all finite coded histories; for irrelevant codes use the empty set as F_p. This is a specified countable sequence. If x avoids every F_p, start at the empty history. At any subsequent $\tau$-history p with $x\in V_p$, membership in D_p cannot come from $X\setminus\overline{V_p}$, so some legal W has its response containing x. Choose its least code and append W and its response. This gives a single-valued recursion on finite histories, totalized by defaults; F3 supplies it. The unique resulting point is x by F1, and the play follows the winning $\tau$, so $x\notin A$. Therefore $A\subseteq\bigcup_p F_p$. No assertion that a dense $G_\delta$ is nonempty has been used. [F1, F3, step 1.2]

3.1 If V is open and N is relatively nowhere dense in V, then N is nowhere dense in X. Indeed for every nonempty ambient open O meeting V, refine inside $O\cap V$ to a nonempty open avoiding the relative closure of N, hence avoiding its ambient closure there. If O misses V, it misses N and, being open, misses its closure as well. The reverse restriction of an ambient nowhere dense set to V is nowhere dense in V by the same refinement criterion. Applying these operations to a specified sequence proves meagreness transfers between V and X for subsets of V. The constructions in steps 1.1–2.1 thus apply relative to V and give witnesses that may be closed in the ambient space by taking closures. [F2, step 1.1, step 1.2, step 2.1]

4.1 If I has a winning strategy $\sigma$, let V_0 be its first open. After that move, old II is the first player and old I the responding player, with complementary target $V_0\setminus A$. Apply steps 1.2–2.1 in V_0 to this responding strategy: their proofs use only arbitrarily small legal refinements and eventual diameter zero, so the interval length bound shifted by one turn still satisfies each used condition. They yield an explicit covering sequence showing $V_0\setminus A$ meagre in V_0. Conversely if A is comeagre in a basic V, take the specified relative closed nowhere dense witnesses for $V\setminus A$. I first selects a legal V_0 inside V avoiding the first witness, then on successive turns takes least refinements avoiding successive witnesses, as in step 1.1. The resulting point stays in V and avoids its complement in A, so I wins. [F1, F2, step 1.1, step 1.2, step 2.1, step 3.1]

5.1 Finally given any nonempty basic V and any specified closed nowhere dense sequence in V, recursively choose least basic refinements starting inside V and avoiding the successive witnesses, with F1's same strict growth or shrinking bounds. F3 constructs the sequence; F1 gives a point in V outside every witness. Therefore V is not meagre in itself. This completes both characterizations and the asserted nonmeagreness, entirely with specified or least-code selections. QED. [F1, F2, F3]
