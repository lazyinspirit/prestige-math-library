---
id: thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive
kind: theorem
title: A Banach space is reflexive if and only if its dual is reflexive
status: draft
origin: pipeline
deps: ["def-reflexive-banach-space", "cor-relative-hahn-banach-bidual-isometry", "thm-relative-hahn-banach-geometric-separation", "lem-complete-subspace-is-closed", "def-hahn-banach-extension-principle-relative", "def-countable-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf"
      locator: "Theorem 2.71(i), printed pp. 89–90"
---

## Statement

Assume HB and the Axiom of Countable Choice $\mathrm{AC}_\omega$.  A real or
complex Banach space $X$ is reflexive if and only if its dual $X^*$ is
reflexive.

## Facts & Assumptions

**Given:** HB, $\mathrm{AC}_\omega$, and a real or complex Banach space $X$.

[F1] A Banach space is reflexive exactly when its canonical map into its
bidual is surjective; surjectivity means that every member of the bidual is
evaluation at a vector ([[def-reflexive-banach-space]]).

[F2] Under HB the canonical map $J_E:E\to E^{**}$ of every real or complex
normed space is scalar-linear and isometric, hence injective
([[cor-relative-hahn-banach-bidual-isometry]]).

[F3] Assuming $\mathrm{AC}_\omega$, a norm-complete subspace of a normed space
is closed ([[lem-complete-subspace-is-closed]]).

[F4] Under HB, a point outside a nonempty closed convex subset of a real or
complex normed space is strictly separated from it by a nonzero bounded
scalar-linear functional; the inequalities use its real part
([[thm-relative-hahn-banach-geometric-separation]], part (ii)).

[F5] HB is the real dominated-extension principle over ZF, and
$\mathrm{AC}_\omega$ is choice for each supplied sequence of nonempty sets
([[def-hahn-banach-extension-principle-relative]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct in both directions.

1.1 If $X=\{0\}$, every scalar-linear functional on $X$ is zero, so $X^*=X^{**}=X^{***}=\{0\}$ and both canonical maps are surjective.  The equivalence therefore holds in the zero-space case. [F1, algebra]

1.2 Suppose first that $X$ is reflexive.  Let $\Lambda\in X^{***}$ and define $f=\Lambda\circ J_X$.  Scalar linearity of the two maps makes $f$ scalar-linear, and [F2] gives $|f(x)|\le \|\Lambda\|\,\|J_Xx\|=\|\Lambda\|\,\|x\|$, so $f\in X^*$. [F2, given]

1.3 Conversely, suppose that $X^*$ is reflexive and put $W=J_X(X)\subseteq X^{**}$.  The image $W$ is a scalar-linear subspace by [F2].  It is complete: if $(J_Xx_n)$ is Cauchy in its restricted norm, then $\|x_n-x_m\|=\|J_Xx_n-J_Xx_m\|$ makes $(x_n)$ Cauchy in the Banach space $X$; for its limit $x$, the same equality gives $J_Xx_n\to J_Xx$ in $W$. [F2, given]

2.1 For arbitrary $x^{**}\in X^{**}$, reflexivity of $X$ supplies an $x\in X$ with $x^{**}=J_Xx$.  Then $J_{X^*}(f)(x^{**})=x^{**}(f)=J_Xx(f)=f(x)=\Lambda(J_Xx)=\Lambda(x^{**})$.  Thus $J_{X^*}(f)=\Lambda$.  Since $\Lambda$ was arbitrary, $J_{X^*}$ is surjective and $X^*$ is reflexive.  This chooses only one representing vector for one arbitrary $x^{**}$ at a time. [F1, step 1.2]

2.2 Apply [F3] under the assumed $\mathrm{AC}_\omega$.  The complete subspace $W$ is closed in $X^{**}$.  It is also nonempty and convex because it is a linear subspace. [F3, F5, step 1.3]

3.1 Suppose for contradiction that some $z\in X^{**}\setminus W$ exists.  By [F4] there is a nonzero $\Gamma\in X^{***}$ that strictly separates the point $z$ from $W$.  In particular, $\operatorname{Re}\Gamma$ is bounded above on $W$.  For $w\in W$ and every real $t$, also $tw\in W$; boundedness of $t\operatorname{Re}\Gamma(w)$ for all $t\in\mathbb R$ forces $\operatorname{Re}\Gamma(w)=0$.  In the complex case $iw\in W$ as well, so $0=\operatorname{Re}\Gamma(iw)=-\operatorname{Im}\Gamma(w)$; hence in either field $\Gamma|_W=0$. [F4, step 2.2, assume-contra, algebra]

4.1 Reflexivity of $X^*$ supplies $f\in X^*$ with $\Gamma=J_{X^*}(f)$.  For every $x\in X$, step 3.1 yields $0=\Gamma(J_Xx)=J_Xx(f)=f(x)$.  Thus $f=0$, whence $\Gamma=J_{X^*}(0)=0$, contradicting the nonzero separator in step 3.1. [F1, step 3.1, discharge-contradiction: step 3.1]

5.1 No point of $X^{**}$ lies outside $W$, so $J_X(X)=X^{**}$ and [F1] says that $X$ is reflexive.  This proves the reverse implication and hence the equivalence.  HB is used only in the isometry [F2] and separation [F4]; $\mathrm{AC}_\omega$ is used only in step 2.2 through [F3]. [F1, F2, F3, F4, step 4.1] ∎

## Source notes

Bühler–Salamon, Theorem 2.71(i), printed pp. 89–90, supplies the complete
canonical-map and annihilator argument.  The proof above replaces the source's
ordinary-choice background by the repository's exact local bookkeeping:
$\mathrm{AC}_\omega$ is stated because the selected complete-subspace-closed
supplier assumes it, while HB is stated separately for bidual isometry and
geometric separation.  The complex branch is supplied by the real-part and
$iW$ calculation in step 3.1.
