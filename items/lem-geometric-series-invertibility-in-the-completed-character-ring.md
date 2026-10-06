---
id: lem-geometric-series-invertibility-in-the-completed-character-ring
kind: lemma
title: Geometric series are invertible in the completed character ring
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-completed-formal-character-ring-for-downward-cones, def-finite-weyl-root-system-lattice-and-chamber-conventions, def-weyl-alternation-operator, lem-rho-minus-w-rho-is-a-sum-of-positive-roots, lem-finite-weyl-strong-exchange-and-deletion, def-height-of-a-root-and-highest-root, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-grothendieck-group-and-character-of-category-o]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. V §6, printed p. 320 (Lemma 5.72: K e^{−δ} d = 1, hence d^{−1} exists in Z<h*> with K = Σ_{γ∈Q+} P(γ)e^{−γ} and d = Σ_{w∈W} ε(w)e^{wδ})"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93, Exercise 13.3(b),(e): q is invertible in X with q ∗ p ∗ e^{−ρ} = e^0"
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.2, printed p. 139, Example 26.2 (the geometric product 1/∏_{α∈R+}(1−e^{−α}))"
verification:
  precheck: pass
---

## Statement

Let $u\in\mathcal R$ be supported in $-Q_+\setminus\{0\}$, so the
coefficient of $e^0$ in $u$ is $0$ and every exponent in the support of $u$
has strictly negative height, where heights are taken in the simple-root
coordinates of [[def-height-of-a-root-and-highest-root]] and
[[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]].
Then $1+u$ is invertible in $\mathcal R$, with inverse
$$(1+u)^{-1}=\sum_{k\ge0}(-u)^k,$$
the sum being coefficientwise finite because $u^k$ is supported in weights of
height at most $-k$. In particular:

(i) $e^\mu$ is invertible with inverse $e^{-\mu}$ for every
$\mu\in\mathfrak h^*$;

(ii) the finite product $\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$ equals
$1+u_0$ for an element $u_0$ supported in $-Q_+\setminus\{0\}$, and is
therefore invertible, with
$\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}=\prod_{\alpha\in\Phi^+}\sum_{k\ge0}e^{-k\alpha}$;

(iii) the product $e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$ is
invertible, with inverse
$e^{-\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$;

(iv) for the Weyl vector $\rho$ the alternant $A(\rho)$ of
[[def-weyl-alternation-operator]] factors as
$A(\rho)=e^{\rho}(1+u')$ with $u'$ supported in $-Q_+\setminus\{0\}$, and so
is invertible with inverse $e^{-\rho}(1+u')^{-1}$.

The identification of the inverse in (iv) with the inverse in (iii) is the
content of the Weyl denominator identity proved later and is not asserted
here.

## Facts & Assumptions

**Given:** The completed character ring $\mathcal R$ of [[def-completed-formal-character-ring-for-downward-cones]], the positive cone $Q_+$ with its simple-root coordinates, the Weyl vector $\rho$ and an element $u\in\mathcal R$ supported in $-Q_+\setminus\{0\}$.

[F1] $\mathcal R$ is a commutative ring with unit $e^0$ under coefficientwise addition and the convolution product, and its elements are exactly the integer coefficient families supported in finite unions of downward cones; a family with finite integer coefficients supported in such a union defines an element of $\mathcal R$ ([[def-completed-formal-character-ring-for-downward-cones]], [[def-grothendieck-group-and-character-of-category-o]]).

[F2] Every element $\beta=\sum_in_i\alpha_i$ of $Q$ has well-defined simple-root coordinates $n_i\in\mathbb Z$, because the simple roots form a basis, and its height $\operatorname{ht}(\beta)=\sum_in_i$ is additive: $\operatorname{ht}(\beta+\gamma)=\operatorname{ht}(\beta)+\operatorname{ht}(\gamma)$; every nonzero element of $Q_+$ has some coordinate $n_i>0$ and hence height at least $1$ ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[def-height-of-a-root-and-highest-root]]).

[F3] $e^\mu\in\mathcal R$ and $e^\mu e^\nu=e^{\mu+\nu}$, so $e^\mu e^{-\mu}=e^0$; also finite products of elements of $\mathcal R$ are computed by the convolution rule ([[def-completed-formal-character-ring-for-downward-cones]]).

[F4] For every $w\in W$, $\rho-w\rho=\sum_{\alpha\in\Phi^+,w^{-1}\alpha<0}\alpha$ ([[lem-rho-minus-w-rho-is-a-sum-of-positive-roots]]). The inversion set of $w^{-1}$ has cardinality $\ell(w^{-1})$ by [[lem-finite-weyl-strong-exchange-and-deletion]], where $\ell$ is the minimum simple-reflection word length of [[def-finite-weyl-root-system-lattice-and-chamber-conventions]]. If $w\ne1$, this length is positive, since the empty word represents only the identity. The sum is then nonempty and has positive height by [F2], so $\rho-w\rho\in Q_+\setminus\{0\}$.

## Proof

**Proof technique:** direct.

1.1 For $k\ge1$ every exponent of $u^k$ lies in $-Q_+\setminus\{0\}$ and has height at most $-k$: each exponent is the negative of a sum of $k$ nonzero elements of $Q_+$, a nonzero element of $Q_+$ has height at least $1$ by [F2], and heights add; hence for a fixed $\eta$ the coefficient of $e^\eta$ in $\sum_{k\ge0}(-u)^k$ vanishes for $k>-\operatorname{ht}(\eta)$ and for $\eta\notin Q$ or $\eta\notin-Q_+$, whereas for each single $k$ the coefficient is a finite integer by [F1], so the sum defines an element $v\in\mathcal R$; multiplying out with [F1] and [F3] gives $(1+u)v=\sum_{k\ge0}(-u)^k+\sum_{k\ge0}(-1)^ku^{k+1}=\sum_{k\ge0}(-u)^k-\sum_{j\ge1}(-u)^j=1$, so $v$ is the inverse of $1+u$. [F1, F2, F3, algebra]

2.1 Claim (ii): expanding the finite product gives $\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})=1+w$ with $w=\sum_{\emptyset\ne S\subseteq\Phi^+}(-1)^{|S|}e^{-\sum_{\alpha\in S}\alpha}$, and each exponent $-\sum_{\alpha\in S}\alpha$ with $S$ nonempty lies in $-Q_+\setminus\{0\}$ because every $\alpha\in\Phi^+$ is a nonzero element of $Q_+$ by [F2], so $w$ is supported in $-Q_+\setminus\{0\}$ and step 1.1 makes the product invertible; likewise each geometric series $\sum_{k\ge0}e^{-k\alpha}$ is the inverse of $1-e^{-\alpha}$, since $e^{-\alpha}$ is supported in $-Q_+\setminus\{0\}$ and step 1.1 applies, so the coefficientwise product $G=\prod_{\alpha\in\Phi^+}\sum_{k\ge0}e^{-k\alpha}$ is the inverse of the product (a finite product of inverses is the inverse of the product in a commutative ring), and $G$ lies in $\mathcal R$ because at a fixed exponent only finitely many tuples $(k_\alpha)$ can sum to it by [F2]. Claim (i) is immediate from [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 Claim (iv): grouping the finite defining sum of $A(\rho)$ by $w=1$ and $w\ne1$ gives $A(\rho)=e^{\rho}+\sum_{w\ne1}(-1)^{\ell(w)}e^{w\rho}=e^{\rho}\bigl(1+u'\bigr)$ with $u'=\sum_{w\ne1}(-1)^{\ell(w)}e^{w\rho-\rho}$; for $w\ne1$ the exponent $w\rho-\rho=-(\rho-w\rho)$ lies in $-Q_+\setminus\{0\}$ by [F4], so $u'$ is supported in $-Q_+\setminus\{0\}$ and step 1.1 shows that $1+u'$ is invertible; hence $A(\rho)=e^{\rho}(1+u')$ is a product of the invertible elements $e^{\rho}$ and $1+u'$, with inverse $e^{-\rho}(1+u')^{-1}$ by [F3] and multiplicativity of inversion. Claim (iii) is the same multiplicativity applied to $e^{\rho}$ and the invertible product of claim (ii). [F1, F3, F4, step 1.1, step 2.1, algebra] ∎ 