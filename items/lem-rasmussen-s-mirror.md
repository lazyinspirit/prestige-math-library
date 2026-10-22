---
id: lem-rasmussen-s-mirror
kind: lemma
title: Rasmussen's invariant changes sign under mirror image
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-lee-homology-of-a-knot-has-two-generators
  - def-rasmussen-s-invariant
  - def-lee-deformed-khovanov-complex
  - def-reverse-mirror-of-oriented-knot
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC_omega enters only through the diagram-independent definition of s;
  the dual-cube calculation is finite and choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Jacob Rasmussen, Khovanov homology and the slice genus,
        arXiv:math/0402131v1
      url: https://arxiv.org/pdf/math/0402131v1
      locator: §3.2, printed pp. 8–9
    - title: Curtis T. McMullen, 4-Manifolds, Stanford lecture notes
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: §5.6, mirror-duality discussion
---

## Statement

Assume the Axiom of Countable Choice.

Let $K^\dagger$ be the reverse mirror of an oriented knot $K$. Then
$$
s(K^\dagger)=-s(K).
$$

## Statement references

[[def-reverse-mirror-of-oriented-knot|Reverse-mirror convention]]

[[def-lee-deformed-khovanov-complex|Lee complex and quantum filtration]]

[[def-rasmussen-s-invariant|Filtration-level definition of s]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §3.2](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §5.6](https://web.stanford.edu/~cm5/4Mnotes.pdf)

## Facts & Assumptions

**Given:** A finite regular diagram $D$ of $K$.

[F1] The normalized Lee cube has state quantum degree $|v|+n_+-2n_-+\sum\deg_q(a)$ and the deformation differential preserves or raises this grading ([[def-lee-deformed-khovanov-complex]]).

[F2] For a knot, the two extremal Lee filtration levels differ by $2$, with $s=s_{\max}-1=s_{\min}+1$ ([[thm-lee-homology-of-a-knot-has-two-generators]], [[def-rasmussen-s-invariant]]).

[F3] The reverse mirror is obtained by the fixed orientation-reversing reflection followed by reversal of the knot orientation ([[def-reverse-mirror-of-oriented-knot]]).

[A1] $\mathrm{AC}_\omega$ is the axiom branch inherited from diagram independence of Lee filtration levels ([[def-countable-choice]], [[def-rasmussen-s-invariant]]).

## Proof

**Given:** $\mathrm{AC}_\omega$, the two-dimensional Lee homology of $K$, and its reverse mirror.

1.1 On $A_L=\mathbb Q[X]/(X^2-1)$ use $\langle u,v\rangle=\epsilon_L(uv)$, whose matrix in the basis $1,X$ is $\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$. Thus $1,X$ are dual labels of opposite quantum degrees. The displayed Frobenius maps give $\langle m(a,b),c\rangle=\langle a\otimes b,\Delta(c)\rangle$ on the eight basis triples, and the analogous split identity follows by transposition. Number the crossings identically on $D$ and its mirror. For a mirror vertex $w$, its corresponding original vertex is $v=1-w$. The local smoothing chart interchanges A and B under reflection, so their resolved circles agree. On the dual complex put $(C^\vee)^i=\operatorname{Hom}_{\mathbb Q}(C^{-i},\mathbb Q)$ and $d^\vee=(d)^*$; this convention squares to zero directly. For the mirror edge changing coordinate $j$, the original reversed edge has sign $(-1)^{\sum_{k<j}v_k}$, while its mirror sign is $(-1)^{\sum_{k<j}w_k}=(-1)^{j-1}(-1)^{\sum_{k<j}v_k}$. Multiply the tensor-pairing identification on mirror vertex $w$ by $\sigma(w)=(-1)^{\sum_j(j-1)w_j}$. Since $\sigma(w+e_j)/\sigma(w)=(-1)^{j-1}$, this makes every edge commute with the transposed original edge. It is therefore an actual cochain isomorphism, including cube signs. With $n=n_++n_-$, complementation gives $i'=-i$ and state shift $|w|+n'_{+}-2n'_{-}=-|v|-n_++2n_-$, the negative original shift. Dual tensor labels have opposite label degrees as well, giving $q'=-q$. Reversing the knot orientation leaves crossing signs and resolutions unchanged, so the same isomorphism applies to $K^\dagger$. [F1, F3, given, construct, algebra]

2.1 For a finite filtered cochain complex $C$, the just-described dual quantum filtration is $F^pC^\vee=\operatorname{Ann}(F^{1-p}C)$ in complementary cohomological degrees. Evaluation induces a perfect pairing $H(C^\vee)\times H(C)\to\mathbb Q$: cocycles are exactly the functionals vanishing on boundaries, and coboundaries are exactly those vanishing on cycles, by finite elimination. Its induced homology filtration is exactly the annihilator filtration. Indeed one direction follows by evaluating representatives. Conversely a homology functional vanishing on classes represented by cycles in $F^{1-p}C$ defines a functional on the sum of the cycle space and $F^{1-p}C$, using its given values on cycles and zero on the latter subspace. The intersection condition makes this well-defined. Extend it across a finite vector-space complement; it is a cocycle because it vanishes on boundaries and represents the required dual class in $F^p$. Thus the finite homology graded quotients occur in opposite degrees under duality. Applied to the two Lee lines, $s_{\max}(K^\dagger)=-s_{\min}(K)$ and $s_{\min}(K^\dagger)=-s_{\max}(K)$. By [A1] and [F2], $s_{\max}(K)=s(K)+1$ and $s_{\min}(K)=s(K)-1$, so $s(K^\dagger)=s_{\max}(K^\dagger)-1=-s(K)$. This finite basis argument adds no choice assumption. [A1, F1, F2, step 1.1, construct, algebra] ∎
