---
id: thm-oriented-chart-integrals-are-coordinate-independent
title: "Coordinate independence of chart integrals"
kind: theorem
status: published
origin: pipeline
deps: ["def-integral-of-an-oriented-chart-supported-top-form", "lem-half-space-chart-transitions-extend-locally-to-side-preserving-diffeomorphisms", "cor-change-of-variables-for-compactly-supported-functions", "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges", "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary", "lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Propositions 16.3–16.4, pp.404–405; Merry Lemma 26.8"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. On an oriented smooth $n$-manifold, including $n=0$ and genuine boundary, a smooth top form with compact support contained in two connected charts has the same signed chart integral in both charts.

## Facts & Assumptions

[F1] [[def-integral-of-an-oriented-chart-supported-top-form]]: Let $M^n$ be oriented and $\omega$ a smooth top form with compact support contained in a connected chart $(U,\phi)$. For $n\geq1$ write $$(\phi^{-1})^*\omega=f\,dx^1\wedge\cdots\wedge dx^n.$$ Let $\sigma_\phi\in\{1,-1\}$ be the sign of its coordinate frame relative to the chosen orientation. Define the chart integral by $$I_\phi(\omega)=\sigma_\phi\int_{\mathbb R^n}\widetilde f(x)\,dx.$$ Here $\widetilde f$ is the Riemann-integrable zero extension, including across a genuine half-space face, as in lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions. For $n=0$, a connected chart is a point $p$, and set $I_p(\omega)=\varepsilon(p)\omega(p)$ using its determinant-line sign. Empty support gives zero. Negative charts are allowed: the upper-half-line chart $u=b-t$ at the right endpoint of an increasing interval has sign $-1$.

[F2] [[lem-half-space-chart-transitions-extend-locally-to-side-preserving-diffeomorphisms]]: Let $n\geq1$ and $G:U\to V$ be a smooth diffeomorphism between relatively open subsets of $H^n$. At every $p\in U\cap\{x_n=0\}$ there are Euclidean open neighborhoods $O$ of $p$ and $O'$ of $G(p)$ and a smooth diffeomorphism $\widehat G:O\to O'$ extending $G$ locally, such that $\widehat G$ maps the positive, zero, and negative sides of $x_n=0$ onto the corresponding sides in $O'$.

[F3] [[cor-change-of-variables-for-compactly-supported-functions]]: Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $g:U\to\mathbb R^n$ be injective and $C^1$, with $Dg(x)$ invertible on $U$. Let $f:\mathbb R^n\to\mathbb R$ be compactly supported Riemann integrable and suppose $\operatorname{supp}f\subseteq g(U)$. Define $$h(x)=\begin{cases}f(g(x))|\det Dg(x)|,&x\in U,\\0,&x\notin U.\end{cases}$$ Then $h$ is compactly supported Riemann integrable and $$\int_{\mathbb R^n}f(y)\,dy=\int_{\mathbb R^n}h(x)\,dx.$$

[F4] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]: For a smooth map $F:M\to N$, pullback sends smooth differential forms on $N$ to smooth differential forms on $M$, is functorial, and satisfies $$ F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta. $$

[F5] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: Assume $\mathrm{AC}_\omega$. Every open cover of a smooth manifold with boundary admits a smooth partition of unity subordinate to it.

[F6] [[lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form]]: If $(C_i)_{i\in I}$ is a locally finite family of closed subsets of a manifold and $K$ is compact, only finitely many $C_i$ meet $K$. There is an open neighborhood of $K$ disjoint from all the other $C_i$. In particular, for a smooth partition of unity $(\rho_i)$ and $\omega\in\Omega_c^k(M)$, only finitely many $\rho_i\omega$ are nonzero.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 For $n\geq1$, let $G=\psi\phi^{-1}$ on the overlap, and write the coefficients as $f_x=(f_y\circ G)\det DG$. Pullback and wedge functoriality give this determinant formula. The chart signs obey $\sigma_\phi\det DG=\sigma_\psi|\det DG|$. [F1, F4]

1.2 Cover the compact support by overlap neighborhoods on which the transition is a Euclidean diffeomorphism, using the side-preserving extension lemma at face points and the transition itself at interior points. A subordinate smooth partition yields finitely many nonzero localized forms with compact support in those neighborhoods. The partition existence uses $\mathrm{AC}_\omega$. [F2, F5, F6]

2.1 For each piece choose the extension neighborhoods large enough to contain its compact coordinate support. Its zero-extended target coefficient is compactly supported Riemann integrable by the chart-integral definition. The side-preserving extension carries its zero extension to the corresponding source zero extension, including zero values on the negative side. Apply compact-support Euclidean change of variables on the open Euclidean extension domain; its injectivity, invertible derivative, and target-support containment all hold. Multiply the equality by $\sigma_\psi$ and use the sign identity to identify the signed source integral. [F1, F2, F3, step 1.1, step 1.2]

3.1 Add the finitely many piece equalities using linearity of the underlying Riemann integral. If the support is empty every coefficient is zero. For $n=0$ a nonempty connected chart is the same single point in either description, and both values are $\varepsilon(p)\omega(p)$. Thus all cases agree. [F1, F6, step 2.1] ∎
