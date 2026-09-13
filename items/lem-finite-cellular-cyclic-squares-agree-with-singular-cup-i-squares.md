---
id: lem-finite-cellular-cyclic-squares-agree-with-singular-cup-i-squares
kind: lemma
title: Finite-cellular cyclic squares agree with singular cup-i squares
status: draft
origin: pipeline
deps: ["lem-finite-cellular-cyclic-squares-cartan-and-basis-action", "lem-equivariant-p-fold-external-power-and-diagonal", "lem-natural-higher-diagonal-approximations-on-singular-chains", "def-steenrod-squares-from-cup-i-products", "thm-cellular-homology-computes-singular-homology", "thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses", "thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter V section 2, printed pages 60--61, and Chapter VIII section 2, printed pages 123--124
    - title: Mosher and Tangora, Cohomology Operations and Applications
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 2, Acyclic Carrier Theorem and construction and independence of cup-i squares, printed pages 14--18
---

## Statement

Assume AC. Let $K$ be a finite oriented regular cell complex. There is a
cell-carried chain map

$$\iota:C_*^{\mathrm{cell}}(K;\mathbb F_2)\longrightarrow C_*^{\mathrm{sing}}(K;\mathbb F_2)$$

whose dual induces an isomorphism

$$\iota^*:H^*_{\mathrm{sing}}(K;\mathbb F_2)\xrightarrow{\cong}H^*_{\mathrm{cell}}(K;\mathbb F_2).$$

For $y\in H^q_{\mathrm{sing}}(K;\mathbb F_2)$ and every integer $i$,

$$\iota^*Sq^i(y)=Sq_{\mathrm{cyc}}^i(\iota^*y).$$

Here the left square is the singular cup-$i$ square and the right square is
the finite-cellular cyclic-power square. The equality is unchanged if one
replaces $\iota$, the carried cellular diagonal, or the carried singular
higher diagonal by another comparison of the stated kind. This lemma makes
the comparison only on finite regular complexes; it does not extend the
cyclic construction to arbitrary spaces.

## Facts & Assumptions

**Given:** AC, a finite oriented regular cell complex $K$, and mod-two
cellular and ordinary unnormalized singular chains.

[F1] A carried equivariant cellular diagonal computes the cyclic coefficient
$D_j$
([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F2] Carried equivariant chain maps extend and are homotopy-unique relative to
the subcomplex where they were fixed
([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F3] The finite-cellular operation is
$Sq_{\mathrm{cyc}}^i(x)=D_{q-i}(x)$ in degree $q$, with zero outside
$0\leq i\leq q$
([[lem-finite-cellular-cyclic-squares-cartan-and-basis-action]]).

[F4] The singular higher diagonals satisfy
$dD_r+D_rd=(1+T)D_{r-1}$, preserve subspaces, and are coherently unique
([[lem-natural-higher-diagonal-approximations-on-singular-chains]]).

[F5] The singular cup-$i$ definition represents $Sq^i[y]$ by
$a\smile_{q-i}a$ for a degree-$q$ cocycle $a$
([[def-steenrod-squares-from-cup-i-products]]).

[F6] Cellular homology agrees with singular homology on a CW complex
([[thm-cellular-homology-computes-singular-homology]]).

[F7] Alexander--Whitney and shuffle are augmentation-preserving chain-homotopy
inverses on ordinary unnormalized chains
([[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]).

[F8] A homotopy equivalence induces an isomorphism on singular homology
([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

[F9] AC supplies choice functions for arbitrary families of nonempty sets
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** compare the cellular and singular equivariant diagonals
inside one acyclic carrier, then evaluate the resulting chain homotopy on a
cocycle.

1.1 Construct a chain comparison carried by closed cells. [given, F6]
The first barycentric subdivision of a finite regular cell complex is a finite
simplicial complex. For each $n$-cell $e$, let $s(e)$ be the mod-two sum of
the oriented $n$-simplices subdividing its closed ball. The codimension-one
faces internal to $\overline e$ occur twice and cancel, while the remaining
faces occur with precisely the cellular incidence coefficients. Hence
$s(de)=ds(e)$. Including these simplicial chains as singular chains defines
$\iota$. Its value on $e$ is supported in $\overline e$, so it is cell-carried.
The relative fundamental simplex in each pair
$(K^n,K^{n-1})$ maps to the same relative fundamental class; thus the induced
map is the standard cellular-to-singular comparison of [F6] and is an
isomorphism on homology.

1.2 Prove that the dual comparison is an isomorphism and locate its choice
cost. [F9, step 1.1]
Let $Q$ be the mapping cone of $\iota$. Step 1.1 says that $Q$ is acyclic.
For every $n$, [F9] chooses a complement $L_n$ to
$B_n(Q)=Z_n(Q)$ in $Q_n$. The differential restricts to an isomorphism
$d:L_n\to B_{n-1}(Q)$. Define $h$ to be its inverse on $B_{n-1}(Q)$ and
zero on $L_{n-1}$. On the decomposition $Q_n=B_n(Q)\oplus L_n$ one checks
directly that $dh+hd=1_Q$. Dualizing this identity contracts
$\operatorname{Hom}(Q,\mathbb F_2)$, which is the shifted mapping cone of
$\iota^*$. Therefore $\iota^*$ is an isomorphism on cohomology. This use of
AC is needed because the singular chain spaces and the family of complements
need not be finite.

2.1 Package both systems as equivariant carried chain maps. [F1, F4, F7, F8, step 1.1]
Let $W$ be the standard free $\mathbb F_2[C_2]$-resolution with
$de_r=(1+T)e_{r-1}$. By [F1], choose a cell-carried equivariant diagonal

$$\Phi_C:W\otimes C_*^{\mathrm{cell}}(K)\longrightarrow C_*^{\mathrm{cell}}(K)\otimes C_*^{\mathrm{cell}}(K).$$

By [F4], the formula
$\Phi_S(e_r\otimes z)=D_r(z)$ defines an equivariant chain map

$$\Phi_S:W\otimes C_*^{\mathrm{sing}}(K)\longrightarrow C_*^{\mathrm{sing}}(K)\otimes C_*^{\mathrm{sing}}(K),$$

because its chain-map equation is exactly
$dD_r+D_rd=(1+T)D_{r-1}$. For a cell $e$, both
$(\iota\otimes\iota)\Phi_C$ and $\Phi_S(1\otimes\iota)$ send
$W\otimes e$ into
$C_*^{\mathrm{sing}}(\overline e)^{\otimes2}$. The closed cell is a disk;
[F8] makes its augmented singular complex acyclic, and [F7] identifies the
tensor target up to augmentation-preserving chain homotopy with the singular
chains of its square. Thus these targets form one equivariant
augmented-acyclic carrier.

3.1 Compare the two diagonals in that carrier. [F2, F9, step 2.1]
Both maps in step 2.1 preserve the degree-zero augmentation and are carried by
the same closed-cell diagonal carrier. The relative equivariant carrier
comparison in [F2] supplies an equivariant chain homotopy $H$ with

$$\Phi_S(1\otimes\iota)-(\iota\otimes\iota)\Phi_C=dH+Hd.$$

Over $\mathbb F_2$ subtraction is addition. The AC expenditure in this step is
exactly [F9]'s selection of one orbit representative and one filling in each
nonempty carrier-extension problem, as already isolated in [F2].

4.1 Evaluate the comparison and identify every square. [F1, F2, F3, F4, F5, step 1.2, step 3.1]
Let $a$ be a singular degree-$q$ cocycle representing $y$, and put
$c=a\iota$. For $0\leq i\leq q$, set $r=q-i$. By [F5], the pullback of the
singular square is represented on a cellular chain $z$ by

$$z\longmapsto(a\otimes a)\Phi_S(e_r\otimes\iota z).$$

By [F1] and [F3], the cyclic square is represented by

$$z\longmapsto(c\otimes c)\Phi_C(e_r\otimes z)=(a\otimes a)(\iota\otimes\iota)\Phi_C(e_r\otimes z).$$

Evaluate the homotopy identity of step 3.1 by the invariant cocycle
$a\otimes a$. The resulting two equivariant cochains on $W\otimes C_*^{\mathrm{cell}}(K)$
differ by the coboundary of $(a\otimes a)H$. Since
$de_r=(1+T)e_{r-1}$ and the evaluated cochain is $C_2$-invariant, its
$W$-differential is zero. Consequently the $e_r$ coordinates displayed above
differ by an ordinary cellular coboundary. Their cohomology classes are equal,
which is the asserted formula. Coherent uniqueness in [F4] and the same
carrier homotopy in [F2] prove independence of every stated comparison choice.

5.1 Check ranges, degeneracies, and choices. [F3, F4, F5, F9, step 1.1, step 1.2, step 4.1]
For the empty complex all chain groups vanish. The zero class is represented
by the zero cocycle, and on a point the only nonzero assertion is
$Sq^0=Sq_{\mathrm{cyc}}^0=\mathrm{id}$ in degree zero. The indices $i=0$
and $i=q$ correspond respectively to $e_q$ and $e_0$; both occur in the
evaluation step, while $i<0$ and $i>q$ are zero on both sides by [F3] and
[F5]. Ordinary
unnormalized singular chains are used throughout, and [F4] includes every
degenerate singular simplex, so no normalization quotient is hidden.
Barycentric subdivision and all sums within a fixed finite $K$ are finite.
AC is used only for the set-indexed carrier fillings in step 3.1 and the
vector-space complements in step 1.2. No arbitrary-space extension, converse,
or Adem relation is used. ∎
