---
id: lem-derivative-ideals-have-the-same-support
kind: lemma
title: Iterated derivative ideals preserve support in the safe characteristic range
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
- def-embedding-dimension-and-regular-local-ring
- def-field
- def-ideal-of-derivatives
- def-marked-ideal
- def-order-of-an-ideal-sheaf-at-a-point
- def-smooth-morphism-schemes
- def-axiom-of-choice
- thm-associated-graded-ring-of-a-regular-local-ring
- thm-completion-of-a-noetherian-local-ring
- thm-completion-preserves-regular-local-rings
- cor-equicharacteristic-complete-local-power-series-quotient
- lem-coefficient-field-transcendental-adjunction-step
- lem-coefficient-field-separable-adjunction-step
- thm-differentials-smooth-locally-free
- cor-derivations-represented-by-differentials
- thm-etale-formally-etale-finite-presentation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
---

## Statement

Assume AC ([[def-axiom-of-choice]]) for the completed-local and smooth-coordinate arguments.

Let $(\mathcal I,\mu)$ be a marked ideal on a smooth $K$-scheme $X$ with $\mathcal I\ne0$ ([[def-marked-ideal]], [[def-smooth-morphism-schemes]]), and let $0\le i\le\mu-1$ ([[def-ideal-of-derivatives]]).
In every characteristic,
$$\operatorname{supp}(\mathcal I,\mu)\subseteq\operatorname{supp}\bigl(\mathcal D^i(\mathcal I),\mu-i\bigr),$$
and, when $K$ is perfect, $\operatorname{supp}(\mathcal I,\mu)$ is closed. If $K$ has characteristic zero, or is perfect of characteristic $p>0$ with $\mu<p$ ([[def-field]]), then the inclusion is an equality. In these same characteristics, for $\mu\ge1$ the condition $\operatorname{ord}_x(\mathcal I)\le\mu$ for every $x\in X$ is equivalent to $\mathcal D^{\mu}(\mathcal I)=\mathcal O_X$.

## Facts & Assumptions

**Given:** A marked ideal $(\mathcal I,\mu)$ on a smooth $K$-scheme $X$ and an integer $0\le i\le\mu-1$.

[F1] [[def-ideal-of-derivatives]]: $\mathcal D^0(\mathcal I)=\mathcal I$, $\mathcal D^i(\mathcal I)$ is generated locally by generators $f$ of $\mathcal I$ and their coordinate partial derivatives of order at most $i$; the recursive identity $\mathcal D^i(\mathcal D^j(\mathcal I))=\mathcal D^{i+j}(\mathcal I)$ holds in every characteristic.

[F2] [[def-order-of-an-ideal-sheaf-at-a-point]]: $\operatorname{ord}_x(\mathcal I)=\max\{n:\mathcal I_x\subseteq\mathfrak m_x^{\,n}\}$, with order at least $\mu$ equivalent to vanishing in $\mathcal O_{X,x}/\mathfrak m_x^\mu$.

[F3] [[def-marked-ideal]]: $\operatorname{supp}(\mathcal I,\mu)=\{x:\operatorname{ord}_x(\mathcal I)\ge\mu\}$.

[F4] The regular-local associated-graded and completion theorems identify $\operatorname{gr}_{\mathfrak m}A$ with $\kappa(x)[U_1,\ldots,U_d]$ and its completion with $\kappa(x)\llbracket u_1,\ldots,u_d\rrbracket$ when $K$ is perfect. A coefficient field containing $K$ is obtained by lifting a separating transcendence basis of $\kappa(x)/K$, then its finite separable algebraic generators by the coefficient-field adjunction lemmas. The parameter map is surjective by the Cohen presentation and injective by the associated-graded isomorphism. These are [[thm-associated-graded-ring-of-a-regular-local-ring]], [[thm-completion-of-a-noetherian-local-ring]], [[thm-completion-preserves-regular-local-rings]], [[cor-equicharacteristic-complete-local-power-series-quotient]], [[lem-coefficient-field-transcendental-adjunction-step]], and [[lem-coefficient-field-separable-adjunction-step]]. Formal parameter derivatives restrict to derivations $A\to\widehat A$; since $\Omega_{A/K}$ is finite free locally, universality identifies them with $\widehat A$-linear combinations of the algebraic derivations ([[thm-differentials-smooth-locally-free]], [[cor-derivations-represented-by-differentials]]). Iterated Leibniz therefore puts their order-$r$ derivatives of $f\in I$ in $\mathcal D^r(I)\widehat A$.

[F5] On an étale chart to affine $N$-space, the infinitesimal Taylor map with coordinate increments $t_1,\ldots,t_N$ exists uniquely by [[thm-etale-formally-etale-finite-presentation]], modulo $(t)^\mu$. Its finitely many coefficients for a function $f$ are the Hasse derivatives of orders $<\mu$, regular functions on the chart. Over a perfect field, their residues all vanish at $x$ exactly when $f\in\mathfrak m_x^\mu$. Indeed the completed chart can be expressed using a separating residue-field coordinate system and the normal parameters in [F4]; Taylor substitution in the normal parameters detects every nonzero initial form of degree $<\mu$. An invertible change of smooth coordinates gives invertible changes of these truncated Taylor coefficients. This reasoning concerns Hasse derivatives, and uses no factorial division.

## Proof

1.1 If $I_x\subseteq\mathfrak m_x^\mu$, Leibniz shows $D(\mathfrak m_x^a)\subseteq\mathfrak m_x^{a-1}$ for every derivation $D$ and $a\ge1$: differentiate each product of $a$ elements of $\mathfrak m_x$. Iterating gives $\mathcal D^i(I)_x\subseteq\mathfrak m_x^{\mu-i}$. This proves the forward inclusion over any field, independently of perfection or factorials. [F1, F2, F3, algebra]

1.2 Assume $K$ perfect. For finitely many local generators $f_j$ of $I$, take the finitely many Taylor coefficients in [F5] of orders $<\mu$. Their simultaneous vanishing locus is exactly $\{x:I_x\subseteq\mathfrak m_x^\mu\}$, so this set is closed on each chart and hence on $X$. This proves closedness in the stated perfect-field range, in every characteristic. [F2, F3, F5]


1.3 Reverse inclusion in the safe-order range. Assume $\operatorname{char}K=0$ or $K$ perfect with $\operatorname{char}K=p>\mu$. If $x\in\operatorname{supp}(\mathcal D^i(\mathcal I),\mu-i)$ but $\operatorname{ord}_x(\mathcal I)=j<\mu$, choose $f\in\mathcal I_x$ of order $j$ and let $f_j$ be its nonzero initial form in [F4]. If $j\le i$, choose a monomial $cU^\alpha$ of $f_j$ with $|\alpha|=j$ and differentiate by $\partial^\alpha$; its initial constant term is $c\alpha!\ne0$, since $j\le\mu<p$ in positive characteristic. This puts a unit in $\mathcal D^i(\mathcal I)_x$, contradicting its order being at least $\mu-i\ge1$. If $i<j$, choose a monomial $cU^\alpha$ of $f_j$ and a multiindex $\beta\le\alpha$ with $|\beta|=i$. Then $\partial^\beta f_j$ is nonzero: its selected coefficient is a product of falling factorials of integers at most $j<p$, so is nonzero in $\kappa(x)$. Hence $\partial^\beta f$ has order exactly $j-i<\mu-i$, contradicting the same support assumption. Thus the reverse inclusion holds in the stated range. [F1, F2, F4]

2.1 The maximal-order criterion in the same range. Suppose first that $\operatorname{ord}_x(\mathcal I)\le\mu$ for every $x$. For a point with $j:=\operatorname{ord}_x(\mathcal I)>0$, choose $f$ of order $j$ and a monomial $cU^\alpha$ in its initial form; $|\alpha|=j\le\mu$, and the coefficient of $\partial^\alpha f$ is $c\alpha!\ne0$ in characteristic zero or when $p>\mu$. Thus $\mathcal D^\mu(\mathcal I)_x=\mathcal O_{X,x}$; the case $j=0$ is immediate since $\mathcal I_x=\mathcal O_{X,x}$. Conversely, if $\mathcal D^\mu(\mathcal I)_x=\mathcal O_{X,x}$, at least one of its local generators $\partial^\alpha f$ is a unit, with $f\in\mathcal I_x$ and $|\alpha|\le\mu$. Since differentiation lowers order by at most $|\alpha|$, $\operatorname{ord}_x(f)\le|\alpha|\le\mu$. This proves the equivalence stalkwise. [F1, F2, F4, step 1.1] ∎

## Remarks

Perfection is essential to the positive-characteristic converse: for $K=\mathbb F_p(a)$, $f=x^p-a$ on $\mathbb A^1_K$ has order one at the closed point $(f)$, but every ordinary $K$-derivative of $f$ vanishes. Thus $\mathcal D(f)=(f)$ and the marking-one maximal-order criterion fails even though $1<p$. The all-characteristic forward inclusion above remains valid. Closedness over imperfect fields is not established by this proof or used by the characteristic-zero development.
