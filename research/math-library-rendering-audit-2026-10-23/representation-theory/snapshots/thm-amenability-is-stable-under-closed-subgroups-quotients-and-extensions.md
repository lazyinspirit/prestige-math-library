---
id: thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions
kind: theorem
title: Amenability is stable under closed subgroups, quotients and extensions
status: published
origin: pipeline
dependency_level: 8
proof_strategy: direct
deps:
  - def-amenable-locally-compact-group
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
  - def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group
  - def-quotient-topology
  - def-quotient-group
  - def-normal-subgroup
  - def-product-topology
  - def-topological-group
  - def-subspace-topology-top
  - def-continuous-map-top
  - lem-open-or-closed-surjection-is-quotient
  - thm-quotient-universal-property
  - thm-quotient-group-laws
  - thm-locally-compact-hausdorff-basics
  - thm-compactness-under-continuous-maps
  - cor-existence-of-left-and-right-haar-measures
  - lem-closed-subgroup-quotient-averaging-and-compact-lifts
  - lem-an-invariant-mean-produces-a-reiter-net
  - thm-amenability-is-equivalent-to-reiter-p1
  - lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation
  - thm-hulanicki-weak-containment-criterion-for-amenability
  - def-weak-containment-of-unitary-representations
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - def-axiom-of-choice
axiom_use: >-
  Assume full AC. It supplies left Haar measures for the finitely many LCH groups
  involved and is inherited through the UCB-to-Reiter and Hulanicki suppliers.
  The weak-containment, quotient, and mean calculations introduce no dependent-
  choice or global-section assumption.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.2, Proposition G.2.2(i)-(ii) and complete proof (printed p. 451); Appendix G.3, Corollary G.3.4 and Appendix F.1, Proposition F.1.10 with proof (printed pp. 426, 457). The local proof expands quotient pullback, gives a direct UCB-mean averaging proof of the extension clause, and uses the assigned restricted-regular-representation supplier."
---

## Statement

Assume AC. Let $G$ be a locally compact Hausdorff group. (i) If $G$ is
amenable, every closed subgroup $H\leq G$ is amenable. (ii) If $G$ is
amenable and $N\trianglelefteq G$ is closed normal, the Hausdorff quotient
$G/N$ is amenable. (iii) If $N\trianglelefteq G$ is closed normal and both
$N$ and $G/N$ are amenable, then $G$ is amenable.

## Facts & Assumptions

**Given:** AC, an LCH group $G$, and the closed subgroup $H$ or closed normal subgroup $N$ appearing in each clause.

[A1] AC is the choice-function principle ([[def-axiom-of-choice]]).

[F1] Every LCH group has a left Haar measure under AC; this applies to $G$, a closed subgroup, and the closed-normal quotient once its LCH property is established ([[cor-existence-of-left-and-right-haar-measures]]).

[F2] A closed subspace of an LCH space is locally compact, and a subspace of a Hausdorff space is Hausdorff; subgroup operations inherit continuity from the ambient topological group, and the inclusion of a subspace is continuous ([[thm-locally-compact-hausdorff-basics]], [[def-subspace-topology-top]], [[def-continuous-map-top]], [[def-topological-group]]).

[F3] For closed $N\trianglelefteq G$, the canonical projection $p:G\to G/N$ is open and the quotient is locally compact Hausdorff; every compact quotient subset has a compact lift ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F4] The set of left cosets $G/N$ has the quotient group law and $p$ is a surjective homomorphism ([[def-normal-subgroup]], [[def-quotient-group]], [[thm-quotient-group-laws]]).

[F5] In a topological group multiplication and inversion are continuous, with the product topology on the square ([[def-topological-group]], [[def-product-topology]]).

[F6] $\mathrm{UCB}(G)$ consists of actual bounded continuous functions, is translation invariant, and embeds isometrically into complex $L^\infty$ by the class map ([[def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group]]).

[F7] Amenability gives a positive complex-linear unital invariant mean on $L^\infty$; such a mean has norm one. Restricting along the isometric UCB class map gives a positive unital invariant mean on UCB, bounded by the sup norm ([[def-amenable-locally-compact-group]], [[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]], [F6]).

[F8] Under AC, a left-invariant mean on UCB gives Reiter (P1), and Reiter (P1) implies amenability ([[lem-an-invariant-mean-produces-a-reiter-net]], [[thm-amenability-is-equivalent-to-reiter-p1]]).

[F9] Under AC and for a fixed left Haar measure, amenability of an LCH group $K$ is equivalent to $1_K\prec\lambda_K$ ([[thm-hulanicki-weak-containment-criterion-for-amenability]]).

[F10] Weak containment means uniform approximation of each diagonal coefficient on compact sets by finite sums of diagonal coefficients; this relation is transitive by approximating each of finitely many intermediate coefficients with error divided by their number ([[def-weak-containment-of-unitary-representations]]).

[F11] If $H$ is closed in $G$, then the restriction of the left regular representation of $G$ to $H$ is weakly contained in the left regular representation of $H$ ([[lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation]]).

[F12] Under AC the left regular representation is a strongly continuous unitary representation; restricting its parameter to a subgroup with the subspace topology preserves these properties by composition with the continuous inclusion ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]], [[def-subspace-topology-top]], [[def-continuous-map-top]]).

[F13] A continuous image of a compact space is compact ([[thm-compactness-under-continuous-maps]]).

[F14] A quotient map is continuous and surjective, and a map out of its target is continuous exactly when its composite with the quotient map is. A continuous open surjection is a quotient map ([[def-quotient-topology]], [[lem-open-or-closed-surjection-is-quotient]], [[thm-quotient-universal-property]]).

[F15] The product topology has a basis of open rectangles; a map into a product is continuous when its coordinate maps are continuous ([[def-product-topology]]).

## Proof

**Proof technique:** direct.

1.1 Fix a closed normal $N\trianglelefteq G$ and let $p:G\to K:=G/N$ be the canonical projection with quotient topology. By [F3], $K$ is LCH Hausdorff and $p$ is open. The map $p$ is continuous and surjective by [F14]. The product map $p\times p:G\times G\to K\times K$ is continuous by the rectangle basis in [F15], is surjective since each of two cosets has a representative, and is open: every open subset of $G\times G$ is a union of open rectangles $U\times V$, whose images are $p(U)\times p(V)$ and are open. Thus $p\times p$ is a quotient map by [F14]. The quotient group law [F4] gives $p\circ\iota_G=\iota_K\circ p$ and $p\circ m_G=m_K\circ(p\times p)$. Since $G$ is a topological group [F5], both left-hand composites are continuous. The quotient-map continuity test [F14] therefore makes inversion $\iota_K$ and multiplication $m_K$ continuous. Hence $K$ is a topological group. [F3, F4, F5, F14, F15, construct]

1.2 Assume $G$ is amenable and let $H\leq G$ be closed. By [F2], $H$ is LCH Hausdorff with its inherited topological-group structure; fix left Haar measures on $G$ and $H$ using [A1, F1]. Hulanicki's criterion [F9] gives $1_G\prec\lambda_G$. If $Q\subseteq H$ is compact, its image under the continuous inclusion $H\hookrightarrow G$ is compact by [F13]. Restricting the coefficient approximations on that compact subset to $H$ shows $1_H\prec\lambda_G|_H$: for a scalar $z\in\mathbb C$, multiply the approximating vectors for the unit scalar by $z$ to approximate the constant coefficient $|z|^2$. The restricted-regular-representation lemma [F11] and [F12] show that the restricted unitary representation is strongly continuous and give $\lambda_G|_H\prec\lambda_H$; transitivity [F10] yields $1_H\prec\lambda_H$. A second application of [F9] to $H$ proves that $H$ is amenable. [A1, F1, F2, F9, F10, F11, F12, F13, construct]

1.3 Assume $G$ is amenable and $N\trianglelefteq G$ is closed normal. Let $K=G/N$ and $p:G\to K$. The quotient is LCH Hausdorff by [F3], and has a left Haar measure by [A1, F1]. Let $\nu$ be an invariant mean on $L^\infty(G)$ and define $m_K(\psi):=\nu([\psi\circ p])$ for $\psi\in\mathrm{UCB}(K)$. Pullback is an actual bounded continuous function. Surjectivity of $p$ gives $\|\psi\circ p\|_{\sup}=\|\psi\|_{\sup}$, and for $g\in G$, $\|L_g(\psi\circ p)-\psi\circ p\|_{\sup} =\|L_{p(g)}\psi-\psi\|_{\sup}.$ As $p$ is continuous, the right side tends to zero as $g\to e$, so pullback maps UCB$(K)$ into UCB$(G)$. It preserves complex linearity, positivity and the constant one. Thus [F7] and invariance of $\nu$ make $m_K$ a mean on UCB$(K)$; for $k\in K$ choose $g$ with $p(g)=k$, and the same identity shows $m_K(L_k\psi)=m_K(\psi)$. By [F8], $K$ satisfies (P1) and is amenable. [A1, F1, F3, F6, F7, F8, F14, construct]

1.4 Assume $N$ and $K=G/N$ are amenable. By [F1] fix left Haar measures, and by [F7] restrict their invariant $L^\infty$ means to obtain invariant means $m_N$ on UCB$(N)$ and $m_K$ on UCB$(K)$, each with norm one. For $\phi\in\mathrm{UCB}(G)$ and $g\in G$, define $\phi_g(h):=\phi(gh)$ for $h\in N$. For $n\in N$ and $h\in N$, $L_n\phi_g(h)=\phi(gn^{-1}h) =(L_{gng^{-1}}\phi)(gh),$ so $\|L_n\phi_g-\phi_g\|_{\sup,N}\le \|L_{gng^{-1}}\phi-\phi\|_{\sup,G}\to0$ as $n\to e$ in $N$. Thus $\phi_g\in\mathrm{UCB}(N)$. Set $F_\phi(g):=m_N(\phi_g)$. For $\gamma\in G$ and $g\in G$, $F_\phi(\gamma^{-1}g)=m_N((L_\gamma\phi)_g)$; hence [F7] gives $\|L_\gamma F_\phi-F_\phi\|_{\sup,G} \le\|L_\gamma\phi-\phi\|_{\sup,G}\to0$ as $\gamma\to e$. Therefore $F_\phi\in\mathrm{UCB}(G)$. [A1, F1, F6, F7, construct]

2.1 For $n\in N$, $\phi_{gn}(h)=\phi(gnh)=\phi_g(nh) =L_{n^{-1}}\phi_g(h)$; invariance of $m_N$ gives $F_\phi(gn)=F_\phi(g)$. Thus $F_\phi$ is constant on the fibres of $p$. By [F3] and [F14], it descends to a continuous function $\psi_\phi:K\to\mathbb C$ with $\psi_\phi\circ p=F_\phi$. To verify $\psi_\phi\in\mathrm{UCB}(K)$, fix $\varepsilon>0$. Since $F_\phi\in\mathrm{UCB}(G)$, choose an identity neighbourhood $V$ in $G$ such that $\|L_\gamma F_\phi-F_\phi\|_{\sup,G}<\varepsilon$ for every $\gamma\in V$. The set $p(V)$ is an identity neighbourhood in $K$ by openness of $p$. For $k\in p(V)$, take any representative $\gamma\in V$ with $p(\gamma)=k$. Surjectivity of $p$ gives the exact equality $\|L_k\psi_\phi-\psi_\phi\|_{\sup,K} =\|L_\gamma F_\phi-F_\phi\|_{\sup,G}<\varepsilon,$ so $\psi_\phi$ is UCB. The argument uses a representative separately for each estimate and makes no global section choice. [F3, F6, F14, step 1.4, construct]

3.1 Define $M(\phi):=m_K(\psi_\phi)$ for $\phi\in\mathrm{UCB}(G)$. The construction of $F_\phi$ and descent are complex-linear in $\phi$, preserve pointwise nonnegativity, and send $1_G$ to $1_K$; therefore [F7] makes $M$ a positive complex-linear unital mean. For $\gamma\in G$, $F_{L_\gamma\phi}(g)=F_\phi(\gamma^{-1}g)$, so $\psi_{L_\gamma\phi}=L_{p(\gamma)}\psi_\phi$. Invariance of $m_K$ now gives $M(L_\gamma\phi)=M(\phi)$. Thus $M$ is a left-invariant UCB mean on $G$. By [F8], $G$ satisfies Reiter (P1) and is amenable. [F7, F8, step 1.4, step 2.1, algebra] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.2, Proposition G.2.2(i)–(ii) and complete proof (printed p. 451) gives quotient and extension inheritance by UCB pullback and fixed points. Appendix G.3, Corollary G.3.4 and Appendix F.1, Proposition F.1.10 with proof (printed pp. 457 and 426) give closed-subgroup inheritance through weak containment of the restricted regular representation. The local proof expands quotient pullback for the library's actual-function UCB and gives an independent UCB-mean averaging proof of the extension clause under its complex-mean convention.
