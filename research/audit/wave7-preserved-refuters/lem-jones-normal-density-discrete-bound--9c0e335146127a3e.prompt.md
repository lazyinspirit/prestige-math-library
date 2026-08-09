# Audit proof-refuter brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

## Selection reasons

- critical risk (8): 6 declared dependencies; 6 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language

## Target item — `lem-jones-normal-density-discrete-bound`

Normalized current SHA-256: `307d0aaec874026b53ce7b3c4ed1bb2a6ca6c42ca6d3410dd2105faeb5f1f1c3`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-jones-normal-density-discrete-bound
kind: lemma
title: "Jones's bound: under choice, a closed discrete subspace of a normal space cannot have more subsets than a dense set has subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-normal-and-t4-spaces, def-dense-top, def-subspace-topology-top, def-axiom-of-choice, def-cardinal-arithmetic, thm-cardinal-power-set-and-cantor]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "G. Gruenhage, General Topology Course Notes, Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "Samuel Gomes da Silva, Closed discrete subsets of separable spaces and relative versions of normality, countable paracompactness and property (a)"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/141614/CommentatMathUnivCarolRetro_52-2011-3_10.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. If $D$ is a closed discrete subspace of a normal space $X$ and $E\subseteq X$ is dense, then there is an injection $\mathcal P(D)\to\mathcal P(E)$. In cardinal notation, $2^{|D|}\le 2^{|E|}$.

## Facts & Assumptions

**Given:** A normal space $X$, a closed discrete $D\subseteq X$, and a dense $E\subseteq X$.

[A1] The Axiom of Choice supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[F1] Every subset of a discrete subspace is closed in that subspace; because $D$ is closed in $X$, each subset of $D$ is closed in $X$ ([[def-subspace-topology-top]]).

[F2] Normality separates disjoint closed sets by disjoint open sets, and every nonempty open set meets a dense subset ([[def-normal-and-t4-spaces]], [[def-dense-top]]).

[F3] Under choice, $2^{\kappa}=|\mathcal P(\kappa)|$ for every cardinal $\kappa$ ([[def-cardinal-arithmetic]], [[thm-cardinal-power-set-and-cantor]]).

## Proof

**Proof technique:** direct.

1.1 For every $A\subseteq D$, the sets $A$ and $D\setminus A$ are disjoint closed subsets of $X$. By normality there is an open $U_A$ containing $A$ and an open $V_A$ containing $D\setminus A$ with $U_A\cap V_A=\varnothing$. [F1, F2]

2.1 Apply [A1] to choose one such pair $(U_A,V_A)$ for every $A\subseteq D$, and define $\Phi(A)=U_A\cap E\subseteq E$. [A1, step 1.1]

3.1 If $A\ne B$, take $d\in A\setminus B$ after interchanging them if necessary. Then $d\in U_A\cap V_B$, a nonempty open set meeting $E$; a point of $E\cap U_A\cap V_B$ lies in $\Phi(A)$ and not in $\Phi(B)$. [F2, step 2.1]

4.1 Thus $\Phi$ is injective. By [F3], this is the asserted cardinal inequality. [F3, step 3.1] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-jones-normal-density-discrete-bound",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://dml.cz/bitstream/handle/10338.dmlcz/141614/CommentatMathUnivCarolRetro_52-2011-3_10.pdf"
  ],
  "rationale": "The peer-reviewed source states the relative Jones lemma as the same power-set inequality for a dense set and a closed discrete relatively normal subspace; normality supplies relative normality, and the library writes the AC use explicitly.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-axiom-of-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Choice** (AC) is the following statement.\n\n> Every family of nonempty sets has a choice function\n> ([[def-choice-function]]).\n\nWritten out: for every set $\\mathcal{F}$ all of whose members are nonempty,\nthere exists a function $g$ with domain $\\mathcal{F}$ satisfying $g(S) \\in S$ for\nall $S \\in \\mathcal{F}$.\n\nAn equivalent formulation is that a product of nonempty sets is nonempty: if\n$X_i \\ne \\emptyset$ for every $i \\in I$, then $\\prod_{i \\in I} X_i \\ne \\emptyset$.\nHere $\\prod_{i \\in I} X_i$ is the set of functions $f$ with domain $I$ such that\n$f(i) \\in X_i$ for every $i \\in I$; when a family of nonempty sets is indexed by\nitself, such an $f$ is precisely a choice function for it.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is\n\n$$\\mathcal{T}_S := \\{\\, U \\cap S : U \\in \\mathcal{T} \\,\\},$$\n\nthe family of **traces** on $S$ of the open sets of $X$. The pair\n$(S, \\mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in\n$\\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the\nambient space needs emphasis.\n\n**$\\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):\n$\\varnothing = \\varnothing \\cap S$ and $S = X \\cap S$ are traces. (T2): if\n$\\mathcal{S}' \\subseteq \\mathcal{T}_S$, choose for each member a set of\n$\\mathcal{T}$ tracing to it — no choice principle is needed, since\n$U' := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\cap S \\subseteq W \\,\\}$ is a canonical\nsuch set for $W \\in \\mathcal{T}_S$, being open by (T2) in $X$ and satisfying\n$U' \\cap S = W$ — and then\n$\\bigcup_i (U_i \\cap S) = (\\bigcup_i U_i) \\cap S \\in \\mathcal{T}_S$ by (T2) in\n$X$. (T3): $(U \\cap S) \\cap (V \\cap S) = (U \\cap V) \\cap S \\in \\mathcal{T}_S$ by\n(T3) in $X$.\n\n**Closed sets of a subspace are the traces of the closed sets.** A set\n$C \\subseteq S$ is closed in $S$ if and only if $C = F \\cap S$ for some closed\n$F \\subseteq X$. Indeed $S \\setminus (U \\cap S) = (X \\setminus U) \\cap S$ and\n$S \\setminus (F \\cap S) = (X \\setminus F) \\cap S$, so complementation inside $S$\nmatches complementation inside $X$ under tracing.\n\n**Bases and subbases trace as well.** If $\\mathcal{B}$ is a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]) then\n$\\mathcal{B}_S := \\{\\, B \\cap S : B \\in \\mathcal{B} \\,\\}$ is a basis for\n$\\mathcal{T}_S$: its members are open in $S$, and for $W = U \\cap S$ open in $S$\nand $x \\in W$ there is $B \\in \\mathcal{B}$ with $x \\in B \\subseteq U$, whence\n$x \\in B \\cap S \\subseteq W$. The same computation with a subbasis $\\mathcal{S}$\nshows that $\\{\\, S_0 \\cap S : S_0 \\in \\mathcal{S} \\,\\}$ is a subbasis for\n$\\mathcal{T}_S$, since tracing commutes with finite intersections and with\nunions.\n\n**The inclusion is continuous.** The inclusion map $\\iota : S \\to X$,\n$\\iota(s) = s$, satisfies $\\iota^{-1}[U] = U \\cap S$ for every $U \\subseteq X$,\nso preimages of open sets are open and $\\iota$ is continuous\n([[thm-continuity-characterisations-top]], clause (b)). Moreover\n$\\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\\iota$ continuous: any\ntopology on $S$ for which $\\iota$ is continuous must contain every\n$\\iota^{-1}[U] = U \\cap S$, hence contain $\\mathcal{T}_S$.\n\n**Characteristic property of a map into a subspace.** Let $(Z, \\mathcal{T}_Z)$ be\na topological space and let $g : Z \\to S$ be a function. Then\n\n$$g \\text{ is continuous as a map } Z \\to (S,\\mathcal{T}_S) \\iff \\iota \\circ g \\text{ is continuous as a map } Z \\to (X,\\mathcal{T}) .$$\n\n*Proof.* For $U \\in \\mathcal{T}$ one has\n$(\\iota \\circ g)^{-1}[U] = g^{-1}[\\iota^{-1}[U]] = g^{-1}[U \\cap S]$. If $g$ is\ncontinuous then each $g^{-1}[U \\cap S]$ is open, so $\\iota \\circ g$ is continuous;\nconversely if $\\iota \\circ g$ is continuous then for any $W = U \\cap S$ open in\n$S$ the set $g^{-1}[W] = (\\iota \\circ g)^{-1}[U]$ is open, so $g$ is continuous.\nBoth directions use only clause (b) of [[thm-continuity-characterisations-top]].\n\n**Restriction of a continuous map.** If $f : X \\to Y$ is continuous and\n$S \\subseteq X$, then $f|_S : S \\to Y$ is continuous, since\n$(f|_S)^{-1}[V] = f^{-1}[V] \\cap S$ is open in $S$ for every open $V \\subseteq Y$\n([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).\n\n**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$\nis open in $S$ if and only if it is open in $X$: a trace $U \\cap S$ is then an\nintersection of two open sets of $X$, and conversely an open subset of $X$\ncontained in $S$ is its own trace. The same statement with \"closed\" throughout\nholds when $S$ is closed in $X$. Both are used in the pasting lemma of the next\nitem, and both fail without the hypothesis: $S$ itself is always open and closed\nin $S$, and need be neither in $X$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F2",
      "source": "def-normal-and-t4-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **normal** when any two disjoint closed sets can be separated by\n  disjoint open sets: for all closed $A, B \\subseteq X$ with\n  $A \\cap B = \\varnothing$ there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nEither of $A$, $B$ may be empty, and those cases are met by $U = \\varnothing$ or\n$V = \\varnothing$ together with $X$; so the condition hides no nonemptiness\nhypothesis. As with regularity, \"disjoint open sets\" may equivalently be read as\n\"disjoint open neighbourhoods of the two sets\" ([[def-neighbourhood-top]]).\n\n**Normality is the special case of complete normality at a disjoint closed\npair.** Disjoint closed sets are separated in the sense of\n[[def-separated-sets]], since the closure of a closed set is itself; so a space\nin which every *separated* pair can be put into disjoint open sets is in\nparticular normal. That stronger condition is defined later on this page, and the\nimplication is proved there.\n\n**The convention fork, and this library's side of it.** Exactly as for\nregularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.\nMunkres builds it in; Kelley, Willard and Engelking do not. **This library takes\nthe second side**: *normal* names the separation condition alone, $T_4$ names\nnormal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.\nThe reason is again that the two halves are independent, and here the point is\nsharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The\nindiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,\nits only closed sets being $\\varnothing$ and the whole space, and it is not even\n$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on\nthis page, the first as a false statement and both on the companion page.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "F2",
      "source": "def-dense-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space, let $\\mathcal{B}$ be a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]) and let $A \\subseteq X$. Interior\nand closure are as in [[def-interior-closure-boundary-top]].\n\n- $A$ is **dense** in $X$ if $\\overline{A} = X$.\n- $A$ is **codense** in $X$ if $X \\setminus A$ is dense.\n- $A$ is **nowhere dense** in $X$ if $\\operatorname{int}(\\overline{A}) = \\varnothing$.\n\n**Three equivalent forms of density, and the one used in practice.** The\nfollowing are equivalent:\n\n1. $\\overline{A} = X$;\n2. $U \\cap A \\ne \\varnothing$ for every nonempty open $U \\subseteq X$;\n3. $B \\cap A \\ne \\varnothing$ for every nonempty $B \\in \\mathcal{B}$.\n\n*Proof.* (1) $\\Rightarrow$ (2): if $U$ is open and nonempty, pick $x \\in U$; then\n$x \\in \\overline{A}$, so $U \\cap A \\ne \\varnothing$ by clause (c) of\n[[thm-closure-characterisation-top]]. (2) $\\Rightarrow$ (3): a nonempty member of\n$\\mathcal{B}$ is a nonempty open set. (3) $\\Rightarrow$ (1): let $x \\in X$; every\n$B \\in \\mathcal{B}$ with $x \\in B$ is nonempty and so meets $A$, hence\n$x \\in \\overline{A}$ by clause (d) of [[thm-closure-characterisation-top]]. Form\n3 is what makes density checkable: for the Sorgenfrey line it is a statement\nabout half-open intervals, and for a metric space a statement about balls.\n\n**Codensity is emptiness of the interior.** $A$ is codense if and only if\n$\\operatorname{int}(A) = \\varnothing$, because\n$X \\setminus \\operatorname{int}(A) = \\overline{X \\setminus A}$\n([[def-interior-closure-boundary-top]]), so $\\overline{X \\setminus A} = X$ holds\nexactly when $\\operatorname{int}(A) = \\varnothing$.\n\n**Nowhere dense implies codense, and the converse fails.** If\n$\\operatorname{int}(\\overline{A}) = \\varnothing$ then\n$\\operatorname{int}(A) \\subseteq \\operatorname{int}(\\overline{A}) = \\varnothing$\nby monotonicity of the interior, so $A$ is codense. The two notions can differ\nonly on sets whose closure is larger than themselves, and there they sometimes\ndo: a dense set with empty interior, such as the rationals inside the real line,\nis codense and is not nowhere dense, its closure being everything. They may also\nagree on such a set: $(0,1)$ inside $\\mathbb{R}$ has closure $[0,1]$ and is\nneither codense nor nowhere dense. A *closed* set is nowhere dense\nprecisely when it is codense, since then $\\overline{A} = A$.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "F3",
      "source": "def-cardinal-arithmetic",
      "source_section": "Definition",
      "quote": "Let $\\kappa$ and $\\lambda$ be cardinals ([[def-cardinal]]), and recall the\nnotation of [[lem-cardinal-operations-are-well-defined]]:\n\n$$\\kappa \\sqcup \\lambda = (\\{0\\} \\times \\kappa) \\cup (\\{1\\} \\times \\lambda), \\qquad {}^{\\lambda}\\kappa = \\{\\, h : h \\text{ is a function } \\lambda \\to \\kappa \\,\\}.$$\n\n**Sum and product.**\n\n$$\\kappa \\oplus \\lambda \\;:=\\; \\lvert \\kappa \\sqcup \\lambda \\rvert, \\qquad \\kappa \\otimes \\lambda \\;:=\\; \\lvert \\kappa \\times \\lambda \\rvert .$$\n\nBoth values exist in ZF and are cardinals: claim (c) of\n[[lem-cardinal-operations-are-well-defined]] well-orders each of the two sets\nexplicitly, and [[lem-cardinality-of-a-well-orderable-set]] then supplies the\nleast equinumerous ordinal. **No choice principle is used.**\n\n**Exponentiation.**\n\n$$\\kappa^{\\lambda} \\;:=\\; \\lvert {}^{\\lambda}\\kappa \\rvert ,$$\n\nthe number of functions from a set of size $\\lambda$ to a set of size $\\kappa$.\nThe right-hand side is defined exactly when ${}^{\\lambda}\\kappa$ is\nwell-orderable. **Assuming the Axiom of Choice** ([[def-axiom-of-choice]]) every\nset is well-orderable ([[thm-well-ordering-theorem]]) and $\\kappa^{\\lambda}$ is\ndefined for all cardinals; every statement on this page that writes\n$\\kappa^{\\lambda}$ for an infinite exponent says so in its own hypotheses.\n\n**Transport to arbitrary sets.** If $A$ and $B$ are well-orderable with\n$\\lvert A \\rvert = \\kappa$ and $\\lvert B \\rvert = \\lambda$, then\n\n$$\\lvert A \\sqcup B \\rvert = \\kappa \\oplus \\lambda, \\qquad \\lvert A \\times B \\rvert = \\kappa \\otimes \\lambda, \\qquad \\lvert {}^{B}A \\rvert = \\kappa^{\\lambda}$$\n\nwhenever the sets on the left have cardinalities at all, because $A \\approx \\kappa$\nand $B \\approx \\lambda$ ([[def-equinumerous]]) and the three constructions\nrespect $\\approx$ (claim (a) of [[lem-cardinal-operations-are-well-defined]],\n[[def-injection-surjection-bijection]]). So the operations may be computed from\nany representatives.\n\n**Finite and infinite cardinals.** A cardinal $\\kappa$ is **finite** when\n$\\kappa \\in \\omega$ and **infinite** when $\\omega \\subseteq \\kappa$, that is\n$\\omega \\le \\kappa$; by trichotomy ([[lem-ordinal-trichotomy]]) and\n[[lem-omega-least-limit-ordinal]] every cardinal is exactly one of the two.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "F3",
      "source": "thm-cardinal-power-set-and-cantor",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), so that every set has a\ncardinality ([[thm-well-ordering-theorem]],\n[[lem-cardinality-of-a-well-orderable-set]]). Let $\\kappa$ be a cardinal\n([[def-cardinal]]) and read $2 = \\{0,1\\}$ as a cardinal. Then:\n\n**(a)** $2^{\\kappa} = \\lvert \\mathcal{P}(\\kappa) \\rvert$\n([[def-cardinal-arithmetic]]), and more generally\n$2^{\\lvert A \\rvert} = \\lvert \\mathcal{P}(A) \\rvert$ for every set $A$;\n\n**(b)** $\\kappa < 2^{\\kappa}$.\n\nClause (b) is [[thm-cantor-powerset]] transcribed into cardinal arithmetic. The\nunderlying combinatorial fact — that there is no surjection $A \\to \\mathcal{P}(A)$\n— is a theorem of ZF and needs no choice at all; what the Axiom of Choice buys\nhere is only the right to write $\\lvert \\mathcal{P}(A) \\rvert$ and $2^{\\kappa}$\nas cardinals in the first place.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For every $A\\subseteq D$, the sets $A$ and $D\\setminus A$ are disjoint closed subsets of $X$. By normality there is an open $U_A$ containing $A$ and an open $V_A$ containing $D\\setminus A$ with $U_A\\cap V_A=\\varnothing$. [F1, F2]",
      "step": "1.1",
      "inputs": [
        "F1",
        "F2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Apply [A1] to choose one such pair $(U_A,V_A)$ for every $A\\subseteq D$, and define $\\Phi(A)=U_A\\cap E\\subseteq E$. [A1, step 1.1]",
      "step": "2.1",
      "inputs": [
        "A1",
        "step 1.1",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "If $A\\ne B$, take $d\\in A\\setminus B$ after interchanging them if necessary. Then $d\\in U_A\\cap V_B$, a nonempty open set meeting $E$; a point of $E\\cap U_A\\cap V_B$ lies in $\\Phi(A)$ and not in $\\Phi(B)$. [F2, step 2.1]",
      "step": "3.1",
      "inputs": [
        "F2",
        "step 2.1",
        "2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Thus $\\Phi$ is injective. By [F3], this is the asserted cardinal inequality. [F3, step 3.1] ∎",
      "step": "4.1",
      "inputs": [
        "F3",
        "step 3.1",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The statement has no distinguished zero or base-value case parameter or case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The statement has no distinguished endpoint and codomain-boundary behavior parameter or case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 2.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-jones-normal-density-discrete-bound",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-jones-normal-density-discrete-bound",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-dense-top",
    "declared_target": "def-dense-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-jones-normal-density-discrete-bound",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-jones-normal-density-discrete-bound",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-jones-normal-density-discrete-bound",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-cardinal-arithmetic",
    "declared_target": "def-cardinal-arithmetic",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cardinal-arithmetic-and-cofinality",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-jones-normal-density-discrete-bound",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-cardinal-power-set-and-cantor",
    "declared_target": "thm-cardinal-power-set-and-cantor",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cardinal-arithmetic-and-cofinality",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (6)

### `def-axiom-of-choice`

````markdown
---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, fs-zorn-provable-in-zf,
               lem-finite-choice, rem-choice-ledger]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] carries the same consistency assumption explicitly
  in its Given; [[rem-choice-ledger]] records the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. A result that invokes AC should say so
  where it is stated, so that a reader can tell which theorems are choice-free;
  that bookkeeping is the purpose of [[rem-choice-ledger]].
  [[rem-choice-strengths]] carries the narrower question of what the ultrafilter
  lemma costs, and on cited authority, and under the hypothesis that ZF is
  consistent, places that principle strictly between ZF and AC.
````

### `def-cardinal-arithmetic`

````markdown
---
id: def-cardinal-arithmetic
kind: definition
title: "Cardinal sum $\\kappa \\oplus \\lambda$, product $\\kappa \\otimes \\lambda$ and exponentiation $\\kappa^{\\lambda}$, and why they are written apart from the ordinal operations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-cardinal-operations-are-well-defined, lem-cardinality-of-a-well-orderable-set, def-cardinal, def-equinumerous, def-injection-surjection-bijection, def-axiom-of-choice, thm-well-ordering-theorem, rem-ordinal-versus-cardinal-exponentiation, def-ordinal-addition, def-ordinal-multiplication, def-ordinal-exponentiation, def-ordinal, lem-omega-least-limit-ordinal, lem-ordinal-trichotomy]
justified_by: []
aliases: [def-cardinal-sum, def-cardinal-product, def-cardinal-exponentiation]
landmark: true
short: "$\\oplus$, $\\otimes$, $\\kappa^{\\lambda}$"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "K. Kearnes, Cardinal Arithmetic (Fall 2025 course handout)"
      url: "https://math.colorado.edu/~kearnes/Teaching/Courses/F25/cardinals_arithmetic.pdf"
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Definition

Let $\kappa$ and $\lambda$ be cardinals ([[def-cardinal]]), and recall the
notation of [[lem-cardinal-operations-are-well-defined]]:

$$\kappa \sqcup \lambda = (\{0\} \times \kappa) \cup (\{1\} \times \lambda), \qquad {}^{\lambda}\kappa = \{\, h : h \text{ is a function } \lambda \to \kappa \,\}.$$

**Sum and product.**

$$\kappa \oplus \lambda \;:=\; \lvert \kappa \sqcup \lambda \rvert, \qquad \kappa \otimes \lambda \;:=\; \lvert \kappa \times \lambda \rvert .$$

Both values exist in ZF and are cardinals: claim (c) of
[[lem-cardinal-operations-are-well-defined]] well-orders each of the two sets
explicitly, and [[lem-cardinality-of-a-well-orderable-set]] then supplies the
least equinumerous ordinal. **No choice principle is used.**

**Exponentiation.**

$$\kappa^{\lambda} \;:=\; \lvert {}^{\lambda}\kappa \rvert ,$$

the number of functions from a set of size $\lambda$ to a set of size $\kappa$.
The right-hand side is defined exactly when ${}^{\lambda}\kappa$ is
well-orderable. **Assuming the Axiom of Choice** ([[def-axiom-of-choice]]) every
set is well-orderable ([[thm-well-ordering-theorem]]) and $\kappa^{\lambda}$ is
defined for all cardinals; every statement on this page that writes
$\kappa^{\lambda}$ for an infinite exponent says so in its own hypotheses.

**Transport to arbitrary sets.** If $A$ and $B$ are well-orderable with
$\lvert A \rvert = \kappa$ and $\lvert B \rvert = \lambda$, then

$$\lvert A \sqcup B \rvert = \kappa \oplus \lambda, \qquad \lvert A \times B \rvert = \kappa \otimes \lambda, \qquad \lvert {}^{B}A \rvert = \kappa^{\lambda}$$

whenever the sets on the left have cardinalities at all, because $A \approx \kappa$
and $B \approx \lambda$ ([[def-equinumerous]]) and the three constructions
respect $\approx$ (claim (a) of [[lem-cardinal-operations-are-well-defined]],
[[def-injection-surjection-bijection]]). So the operations may be computed from
any representatives.

**Finite and infinite cardinals.** A cardinal $\kappa$ is **finite** when
$\kappa \in \omega$ and **infinite** when $\omega \subseteq \kappa$, that is
$\omega \le \kappa$; by trichotomy ([[lem-ordinal-trichotomy]]) and
[[lem-omega-least-limit-ordinal]] every cardinal is exactly one of the two.

## Remarks

**The symbols $\oplus$ and $\otimes$ are not decoration.** Ordinal addition and
ordinal multiplication ([[def-ordinal-addition]], [[def-ordinal-multiplication]])
are defined on **the same objects** — cardinals are ordinals — and give
**different values**. With $\omega$ read as a cardinal,
$\omega \oplus \omega = \omega$, whereas the ordinal sum $\omega + \omega$ is
strictly larger than $\omega$; and $\omega \otimes \omega = \omega$, whereas the
ordinal product $\omega \cdot \omega$ is larger still. Writing both operations
with $+$ and $\cdot$ would make every equation on this page ambiguous, so the
cardinal operations get their own symbols and the plain $+$ and $\cdot$ on this
page always mean the ordinal ones.

**Exponentiation keeps the symbol, under a hard rule.** There is no comparably
readable alternative to $\kappa^{\lambda}$, and
[[rem-ordinal-versus-cardinal-exponentiation]] already records that
$\alpha^{\beta}$ is used for two different operations: as ordinals
$2^{\omega} = \omega$, while the cardinal $2^{\omega}$ counts the functions
$\omega \to \{0,1\}$ and is uncountable. The rule adopted here, and followed on
this page and its companion, is:

> **In an exponential, the base and the exponent are always alephs, letters or
> expressions denoting cardinals — $\kappa$, $\lambda$, $\mu$,
> $\mathfrak{c}$, $\operatorname{cf}(\kappa)$, $\lvert A \rvert$ — or a natural
> number read as a cardinal; never $\omega$, never $\omega_1$, and never a
> letter denoting an ordinal, such as $\alpha, \beta, \gamma, \xi, \eta$.**

So $2^{\aleph_0}$, $\kappa^{\lambda}$ and $\aleph_1^{\aleph_0}$ are cardinal
exponentials, and an expression such as $\omega^{\omega}$ or $\alpha^{\beta}$ is
never written here at all. Where a value has to be named in both readings, the
two are given different letters.

**What is being counted, in each case.** $\kappa \oplus \lambda$ is the size of
two disjoint blocks laid side by side; the tagging in $\sqcup$ is what makes
"disjoint" true even though one of $\kappa$ and $\lambda$ is always a subset of
the other, so their intersection is the smaller of the two. $\kappa \otimes \lambda$
is the size of a rectangle. $\kappa^{\lambda}$ is the number of ways to choose a
value in $\kappa$ for each of $\lambda$ positions, independently. None of the
three is sensitive to the order in which the elements are arranged, which is
exactly what distinguishes them from the ordinal operations
([[def-ordinal-exponentiation]] included), whose values depend on the arrangement.

**The zero and one cases are not special.** $0 = \varnothing$ and $1 = \{0\}$ are
cardinals ([[def-ordinal]]), and the definitions apply to them unchanged:
$\kappa \sqcup 0 = \{0\} \times \kappa$, $\kappa \times 0 = \varnothing$, and
${}^{0}\kappa = \{\varnothing\}$ has exactly one element, the empty function.
The resulting unit laws are proved rather than stipulated, in
[[lem-cardinal-arithmetic-basic-laws]].
````

### `def-dense-top`

````markdown
---
id: def-dense-top
kind: definition
title: "Dense, nowhere dense and codense subsets of a topological space, and the criterion by basic open sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interior-closure-boundary-top, thm-closure-characterisation-top, def-topology-basis-subbasis]
justified_by: []
forward_refs: [def-separable-space]
aliases: [def-nowhere-dense-top, def-codense-top]
landmark: false
short: "dense, nowhere dense, codense"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Nowhere dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nowhere_dense_set"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) and let $A \subseteq X$. Interior
and closure are as in [[def-interior-closure-boundary-top]].

- $A$ is **dense** in $X$ if $\overline{A} = X$.
- $A$ is **codense** in $X$ if $X \setminus A$ is dense.
- $A$ is **nowhere dense** in $X$ if $\operatorname{int}(\overline{A}) = \varnothing$.

**Three equivalent forms of density, and the one used in practice.** The
following are equivalent:

1. $\overline{A} = X$;
2. $U \cap A \ne \varnothing$ for every nonempty open $U \subseteq X$;
3. $B \cap A \ne \varnothing$ for every nonempty $B \in \mathcal{B}$.

*Proof.* (1) $\Rightarrow$ (2): if $U$ is open and nonempty, pick $x \in U$; then
$x \in \overline{A}$, so $U \cap A \ne \varnothing$ by clause (c) of
[[thm-closure-characterisation-top]]. (2) $\Rightarrow$ (3): a nonempty member of
$\mathcal{B}$ is a nonempty open set. (3) $\Rightarrow$ (1): let $x \in X$; every
$B \in \mathcal{B}$ with $x \in B$ is nonempty and so meets $A$, hence
$x \in \overline{A}$ by clause (d) of [[thm-closure-characterisation-top]]. Form
3 is what makes density checkable: for the Sorgenfrey line it is a statement
about half-open intervals, and for a metric space a statement about balls.

**Codensity is emptiness of the interior.** $A$ is codense if and only if
$\operatorname{int}(A) = \varnothing$, because
$X \setminus \operatorname{int}(A) = \overline{X \setminus A}$
([[def-interior-closure-boundary-top]]), so $\overline{X \setminus A} = X$ holds
exactly when $\operatorname{int}(A) = \varnothing$.

**Nowhere dense implies codense, and the converse fails.** If
$\operatorname{int}(\overline{A}) = \varnothing$ then
$\operatorname{int}(A) \subseteq \operatorname{int}(\overline{A}) = \varnothing$
by monotonicity of the interior, so $A$ is codense. The two notions can differ
only on sets whose closure is larger than themselves, and there they sometimes
do: a dense set with empty interior, such as the rationals inside the real line,
is codense and is not nowhere dense, its closure being everything. They may also
agree on such a set: $(0,1)$ inside $\mathbb{R}$ has closure $[0,1]$ and is
neither codense nor nowhere dense. A *closed* set is nowhere dense
precisely when it is codense, since then $\overline{A} = A$.

## Remarks

- **Density is a property of the pair, not of the set.** A subset dense in $X$
  need not be dense in a space with a finer topology. In a nonempty indiscrete
  space every nonempty subset is dense, while $\varnothing$ is not; in the empty
  space $\varnothing$ is dense as well. Where a density claim is made below the
  topology is always named.

- **The empty set.** $\varnothing$ is nowhere dense and codense in every space,
  and it is dense only in $X = \varnothing$. $X$ itself is dense in $X$ and is
  nowhere dense only when $X = \varnothing$.

- **What is deliberately not defined here.** Separability, meaning the existence
  of an at most countable dense subset, is a countability axiom not developed at
  this point in the reading order; it is defined later in
  [[def-separable-space]]. Where a space on the companion page has an at most
  countable dense subset, that is what is said in full.
````

### `def-normal-and-t4-spaces`

````markdown
---
id: def-normal-and-t4-spaces
kind: definition
title: "Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-separated-sets,
       def-standard-topologies, def-neighbourhood-top]
justified_by: []
aliases: [def-normal-space, def-t4-space]
landmark: true
short: "normal space, $T_4$ space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

## Remarks

- **Normality does not imply regularity**, and the failure is witnessed by
  Sierpinski space on the companion page, which is normal and not regular.
  Whether *regularity* implies normality is a question this page leaves open: any
  witness reachable from the material here would need cardinal arithmetic or the
  hereditary behaviour of regularity. This page's own prerequisites still supply
  neither: cardinal arithmetic and cofinality is now built, but *below* this
  one, and nothing here draws on it; the hereditary and productive behaviour of
  the separation axioms is developed later in the reading order. So nothing above
  asserts an answer and no false statement asserting
  one is planted here ([[rem-separation-axiom-conventions]]).

- **Normality is the axiom that behaves worst**, and the companion page shows
  one symptom: the deleted Tychonoff plank, a subspace of a product of two
  ordinal spaces each of which is $T_3$, is Hausdorff and not normal. Whether
  normality is inherited by subspaces or preserved by products is a question this
  page does not answer, and nothing here asserts an answer; the plank is
  presented only as a Hausdorff space that fails normality.

- **What the definition does *not* say.** It says nothing about separating a
  point from a closed set, because a point need not be closed; that is the
  content of the $T_1$ hypothesis in $T_4$, and the theorem two items below is
  where it is spent.
````

### `def-subspace-topology-top`

````markdown
---
id: def-subspace-topology-top
kind: definition
title: "Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis, def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-subspace-top, def-relative-topology]
landmark: true
short: "subspace topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## Remarks

- **The subspace topology is what makes a subset a space.** Before it, a statement
  such as "the restriction of $f$ to $C$ is continuous" has no meaning, because
  $C$ carries no topology. Every restriction below is taken with respect to the
  subspace topology and with no other convention available.

- **Openness and closedness are not absolute.** $[0,1)$ is open in $[0,2)$ and is
  neither open nor closed in $\mathbb{R}$; the interval $(0,1)$ is closed in
  itself. A sentence of the form "$A$ is open" is incomplete unless the space is
  named, and this library names it whenever more than one is in play.

- **Transitivity.** If $S \subseteq T \subseteq X$ then the subspace topology $S$
  inherits from $(T, \mathcal{T}_T)$ is the subspace topology it inherits from
  $X$, since $(U \cap T) \cap S = U \cap S$ for $U \in \mathcal{T}$. So no
  ambiguity arises from the route by which a subset is reached.
````

### `thm-cardinal-power-set-and-cantor`

````markdown
---
id: thm-cardinal-power-set-and-cantor
kind: theorem
title: "Assuming the Axiom of Choice, $2^{\\kappa} = \\lvert \\mathcal{P}(\\kappa) \\rvert$, and Cantor's theorem in cardinal form: $\\kappa < 2^{\\kappa}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cardinal-arithmetic, thm-cantor-powerset, def-equinumerous, lem-cardinality-of-a-well-orderable-set, lem-cardinal-operations-are-well-defined, def-injection-surjection-bijection, lem-cardinal-arithmetic-basic-laws, def-cardinal, def-axiom-of-choice, thm-well-ordering-theorem, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "$\\kappa < 2^{\\kappa} = \\lvert\\mathcal{P}(\\kappa)\\rvert$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "P. Koellner, Set Theory: The Independence Phenomenon, Ch. 3"
      url: "https://people.math.harvard.edu/~wboney/fall16/settheory.pdf"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), so that every set has a
cardinality ([[thm-well-ordering-theorem]],
[[lem-cardinality-of-a-well-orderable-set]]). Let $\kappa$ be a cardinal
([[def-cardinal]]) and read $2 = \{0,1\}$ as a cardinal. Then:

**(a)** $2^{\kappa} = \lvert \mathcal{P}(\kappa) \rvert$
([[def-cardinal-arithmetic]]), and more generally
$2^{\lvert A \rvert} = \lvert \mathcal{P}(A) \rvert$ for every set $A$;

**(b)** $\kappa < 2^{\kappa}$.

Clause (b) is [[thm-cantor-powerset]] transcribed into cardinal arithmetic. The
underlying combinatorial fact — that there is no surjection $A \to \mathcal{P}(A)$
— is a theorem of ZF and needs no choice at all; what the Axiom of Choice buys
here is only the right to write $\lvert \mathcal{P}(A) \rvert$ and $2^{\kappa}$
as cardinals in the first place.

## Facts & Assumptions

**Given:** The Axiom of Choice, a cardinal $\kappa$, and a set $A$.

[L1] $\kappa^{\lambda} = \lvert {}^{\lambda}\kappa \rvert$, where ${}^{\lambda}\kappa$ is the set of functions $\lambda \to \kappa$ ([[def-cardinal-arithmetic]]).

[L2] There is no surjection $A \to \mathcal{P}(A)$, and $A \prec \mathcal{P}(A)$, that is $A \preceq \mathcal{P}(A)$ and $A \not\approx \mathcal{P}(A)$ ([[thm-cantor-powerset]], [[def-equinumerous]]).

[L3] For a well-orderable $X$, $X \approx \lvert X \rvert$, the value is a cardinal, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]]).

[L4] $A \approx B$ implies $\mathcal{P}(A) \approx \mathcal{P}(B)$ (claim (b) of [[lem-cardinal-operations-are-well-defined]]).

[L5] For cardinals, $\kappa \le \lambda$ if and only if $\kappa \preceq \lambda$; and $A \preceq B$ with both well-orderable gives $\lvert A \rvert \le \lvert B \rvert$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L6] Assuming the Axiom of Choice every set is well-orderable, hence has a cardinality ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[L7] Ordinals satisfy trichotomy, and a map with a two-sided inverse is a bijection ([[lem-ordinal-trichotomy]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 The map $\chi : \mathcal{P}(\kappa) \to {}^{\kappa}2$ sending $S$ to its characteristic function, $\chi_S(\xi) = 1$ for $\xi \in S$ and $\chi_S(\xi) = 0$ otherwise, has the two-sided inverse $h \mapsto h^{-1}[\{1\}]$, so it is a bijection and $\mathcal{P}(\kappa) \approx {}^{\kappa}2$. [L7]

1.2 By [L2], $\kappa \preceq \mathcal{P}(\kappa)$ and $\kappa \not\approx \mathcal{P}(\kappa)$. [L2]

2.1 Claim (a): by [L6] both $\mathcal{P}(\kappa)$ and ${}^{\kappa}2$ have cardinalities, equal by step 1.1 and [L3], so $\lvert \mathcal{P}(\kappa)\rvert = \lvert {}^{\kappa}2\rvert = 2^{\kappa}$ by [L1]; and for an arbitrary set $A$, $A \approx \lvert A \rvert$ by [L3] gives $\mathcal{P}(A) \approx \mathcal{P}(\lvert A \rvert)$ by [L4], hence $\lvert \mathcal{P}(A)\rvert = 2^{\lvert A \rvert}$. [step 1.1, L1, L3, L4, L6]

2.2 By [L5] applied to step 1.2, $\kappa = \lvert \kappa \rvert \le \lvert \mathcal{P}(\kappa)\rvert$; and $\kappa \ne \lvert \mathcal{P}(\kappa)\rvert$, since otherwise $\kappa \approx \lvert \mathcal{P}(\kappa)\rvert \approx \mathcal{P}(\kappa)$ by [L3], contradicting step 1.2. [step 1.2, L3, L5, L6]

3.1 Therefore $\kappa < \lvert \mathcal{P}(\kappa)\rvert = 2^{\kappa}$ by trichotomy, which with step 2.1 is claim (b). [step 2.1, step 2.2, L7] ∎

## Remarks

**Why $2$ and not some other base.** The characteristic function of a subset takes two values, so the power set is the function space with base $2$; that is the whole content of step 1.1, and it is why $2^{\kappa}$ rather than $\mathcal{P}$ is the object cardinal arithmetic manipulates. For infinite $\kappa$, any base $\mu$ with $2 \le \mu$ gives the same value once $\mu \le 2^{\kappa}$, by monotonicity, the second exponent law and [[thm-hessenberg]], and the companion page computes one such case; for finite $\kappa$ the bases genuinely differ, $3^{2} = 9 \ne 4 = 2^{2}$.

**No fixed point.** Clause (b) holds for **every** cardinal, so no cardinal satisfies $2^{\kappa} = \kappa$ and the hierarchy of cardinals never terminates. The corresponding statement one level up — that $\alpha \mapsto \aleph_\alpha$ has no fixed point — is **false**, and the companion page exhibits one; the two operations behave quite differently, and it is the power operation, not the successor operation, that is unboundedly expansive.

**Where the Axiom of Choice is and is not spent.** [[thm-cantor-powerset]] is choice free, and so is step 1.1. The hypothesis is used only to know that a set has a cardinality: at $\mathcal{P}(\kappa)$ and at ${}^{\kappa}2$ for clause (b), and again at $A$ and $\mathcal{P}(A)$ in the general form of clause (a). In ZF alone, $\mathcal{P}(\omega)$ may fail to be well-orderable, and then $2^{\aleph_0}$ is not an ordinal and the inequality of clause (b) has no cardinal to compare $\kappa$ with — while the underlying statement "there is no surjection $\omega \to \mathcal{P}(\omega)$" remains a theorem.
````

