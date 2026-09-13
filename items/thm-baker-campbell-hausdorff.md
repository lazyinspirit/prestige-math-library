---
id: thm-baker-campbell-hausdorff
kind: theorem
title: Baker–Campbell–Hausdorff theorem
status: published
origin: pipeline
deps: ["def-countable-choice", "def-local-logarithm-on-a-lie-group", "lem-local-convergence-of-the-baker-campbell-hausdorff-series", "lem-right-trivialized-differential-of-the-lie-group-exponential", "prop-adjoint-is-a-smooth-lie-group-representation", "prop-adjoint-exponential-identity", "thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields", "def-left-and-right-translations-on-a-lie-group", "def-formal-exponential-logarithm-and-powers", "thm-formal-exponential-logarithm-identities", "lem-exponential-series-has-infinite-radius", "thm-geometric-series", "lem-tube-lemma-for-a-compact-factor", "thm-coordinate-map-for-a-finite-dimensional-normed-space", "thm-uniform-limit-interchanges-riemann-integration", "cor-vector-valued-ftc-and-lipschitz-bound", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Michael Müger, Notes on the Baker-Campbell-Hausdorff-Dynkin theorem
      url: https://www.math.ru.nl/~mueger/PDF/BCHD.pdf
      locator: Theorem 2.14 and complete proof, with formulas (1.4), (1.5), and (2.6), printed pages 3–4, 7, and 10–11
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Appendix B §4, Theorem B.22 and formulas (B.23)–(B.24), printed pages 669–671
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 3.37, printed page 38
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with Lie algebra $\mathfrak g$. For every chosen local logarithm there is an
open neighborhood $W$ of $(0,0)$ in $\mathfrak g\times\mathfrak g$ such that
Dynkin's series converges for $(X,Y)\in W$ and

$$\log_G\bigl(\exp_G(X)\exp_G(Y)\bigr)=\operatorname{BCH}(X,Y).$$

Consequently, for every $(X,Y)\in W$,

$$\exp_G(X)\exp_G(Y)=\exp_G\bigl(\operatorname{BCH}(X,Y)\bigr).$$

The neighborhood can be chosen inside any convergence ball supplied by the
preceding convergence lemma and so that the product remains in the fixed
domain of $\log_G$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$, a
fixed norm on $\mathfrak g$, and one local logarithm
$\log_G:U\to V$ associated with $\exp_G|_V$.

[F1] The local logarithm is the inverse of the exponential on the specified
open neighborhoods, and Dynkin's BCH series converges absolutely on a
sum-norm ball and uniformly on smaller closed balls.
[[def-local-logarithm-on-a-lie-group]].
[[lem-local-convergence-of-the-baker-campbell-hausdorff-series]].

[F2] Right-trivialization of $d\exp_Z$ is the entire operator series
$D(\operatorname{ad}_Z)=\sum_{n\ge0}\operatorname{ad}_Z^n/(n+1)!$, and the
linear-ODE exponential is its operator power series, uniformly on compact
parameter intervals.
[[lem-right-trivialized-differential-of-the-lie-group-exponential]].

[F3] The adjoint map is a smooth representation and, assuming countable
choice, $\operatorname{Ad}_{\exp Z}=e^{\operatorname{ad}_Z}$.
[[def-countable-choice]].
[[prop-adjoint-is-a-smooth-lie-group-representation]].
[[prop-adjoint-exponential-identity]].

[F4] The curve $t\mapsto\exp_G(tZ)$ is the integral curve of $Z^L$ through
$e$; translations give the tangent trivializations; and differentials obey
the chain rule.
[[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]].
[[def-left-and-right-translations-on-a-lie-group]].
[[thm-chain-rule-for-differentials-of-smooth-maps]].

[F5] Formal exponential and logarithm over a commutative rational algebra are
inverse, where $\log(1+w)=\sum_{j\ge1}(-1)^{j-1}w^j/j$.
[[def-formal-exponential-logarithm-and-powers]].
[[thm-formal-exponential-logarithm-identities]].

[F6] The scalar exponential series converges everywhere, and a geometric
series converges when its ratio has absolute value less than one.
[[lem-exponential-series-has-infinite-radius]].
[[thm-geometric-series]].

[F7] The tube lemma supplies one neighborhood uniform over a compact
parameter set. A finite basis gives bounded coordinates; uniform scalar
limits commute with Riemann integration; and vector-valued FTC is
componentwise.
[[lem-tube-lemma-for-a-compact-factor]].
[[thm-coordinate-map-for-a-finite-dimensional-normed-space]].
[[thm-uniform-limit-interchanges-riemann-integration]].
[[cor-vector-valued-ftc-and-lipschitz-bound]].

## Proof

**Proof technique:** direct analytic identification with Dynkin's series.

1.1 By [F1], choose a BCH convergence ball. The smooth map $\Phi(t,X,Y)=\exp_G(tX)\exp_G(tY)$ sends $[0,1]\times\{(0,0)\}$ to $e\in U$. Apply the tube lemma to $\Phi^{-1}(U)$ and intersect the resulting neighborhood of $(0,0)$ with a sufficiently small sum-norm ball. For $(X,Y)$ in this neighborhood, put $g(t)=\Phi(t,X,Y)$ and $H(t)=\log_G(g(t))$; then $H$ is smooth, $H(0)=0$, and $\exp_G(H(t))=g(t)$ for all $0\le t\le1$. [F1, F4, F7]

2.1 Right-trivializing the derivative of the product and using the two one-parameter-subgroup equations gives $d(R_{g(t)^{-1}})_{g(t)}g'(t)=X+\operatorname{Ad}_{\exp_G(tX)}Y=X+e^{t\operatorname{ad}_X}Y$. Applying [F2] to $g(t)=\exp_G(H(t))$ therefore gives $D(A(t))H'(t)=X+e^{t\operatorname{ad}_X}Y$, where $A(t)=\operatorname{ad}_{H(t)}$ and $D(A)=\sum_{n\ge0}A^n/(n+1)!$. [F2, F3, F4, step 1.1]

2.2 Since $\operatorname{Ad}$ is a representation, [F3] and step 1.1 give $e^{A(t)}=\operatorname{Ad}_{\exp H(t)}=e^{t\operatorname{ad}_X}e^{t\operatorname{ad}_Y}$. Put $P(t)=e^{t\operatorname{ad}_X}e^{t\operatorname{ad}_Y}-I$. Continuity and the tube lemma allow a further shrinking, uniform in $t\in[0,1]$, so that $\lVert P(t)\rVert<q<1$ and $H(t)$ remains in a fixed small coordinate ball. [F2, F3, F7, step 1.1]

3.1 Define $Q(P)=\sum_{j\ge0}(-1)^jP^j/(j+1)$. It converges absolutely for $\lVert P\rVert<1$ by [F6]. In the commutative formal subalgebra generated by one indeterminate $z$, [F5] gives $\log(e^z)=z$, hence $D(z)Q(e^z-1)=1$. Absolute operator convergence permits substitution $z=A(t)$ and coefficientwise multiplication, so $Q(P(t))$ is the two-sided inverse of $D(A(t))$. Thus step 2.1 becomes $H'(t)=\sum_{j\ge0}(-1)^jP(t)^j(X+e^{t\operatorname{ad}_X}Y)/(j+1)$. [F5, F6, step 2.1, step 2.2]

4.1 Expand $P(t)$ by [F2]: $P(t)=\sum_{m,n\ge0,\,m+n>0}t^{m+n}\operatorname{ad}_X^m\operatorname{ad}_Y^n/(m!n!)$. The bound $\lVert P(t)\rVert\le q<1$, together with exponential scalar majorants after one further shrinking, makes the expansions in step 3.1 jointly absolutely and uniformly convergent on $[0,1]$. In finite coordinates [F7] therefore permits termwise multiplication, regrouping, and integration. [F2, F6, F7, step 2.2, step 3.1]

5.1 A term with $k-1$ positive blocks from $P(t)^{k-1}$ followed by the terminal $X$ has word degree $N$, coefficient $(-1)^{k-1}/k$, and power $t^{N-1}$; a term followed by $e^{t\operatorname{ad}_X}Y$ has the same description, with final block $X^mY$ and again power $t^{N-1}$. Every other possible final block in Dynkin's formula has at least two terminal equal letters and its right-nested commutator is zero. Hence integration from zero to one contributes the factor $1/N$ and gives exactly the full degree-$N$ Dynkin polynomial $H_N(X,Y)$. [F1, step 4.1, algebra]

6.1 By vector-valued FTC and step 1.1, $H(1)=\int_0^1H'(t)\,dt$. Steps 4.1–5.1 and the uniform convergence in [F1] identify this integral with $\sum_{N\ge1}H_N(X,Y)=\operatorname{BCH}(X,Y)$. Since $H(1)=\log_G(\exp_GX\exp_GY)$, the logarithmic identity follows; applying $\exp_G$ and using [F1] gives the asserted product identity. [F1, F7, step 1.1, step 4.1, step 5.1]

7.1 A Lie group contains its identity. In dimension zero the identities are the unique identities, and in dimension one the bracket vanishes so BCH is $X+Y$ and the local product is additive in exponential coordinates. No adjoint endomorphism is assumed invertible: step 3.1 inverts $D(A)$ by a convergent series and never divides by $A$. Both endpoints of $[0,1]$ occur in steps 1.1 and 6.1. The only choice principle is $\mathrm{AC}_\omega$, inherited exactly through the local logarithm, exponential, and adjoint-exponential suppliers in [F1]–[F4]; all shrinkings select finitely many single witnesses. No metric independence beyond the arbitrary auxiliary norm and no biconditional is asserted. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, step 6.1] ∎
