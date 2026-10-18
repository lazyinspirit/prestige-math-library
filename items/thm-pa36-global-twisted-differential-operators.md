---
id: thm-pa36-global-twisted-differential-operators
kind: theorem
title: Global sections of twisted differential operators on the flag variety
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-harish-chandra-projection
  - def-pa36-flag-tdo-and-module
  - lem-flag-variety-canonical-bundle-weight-minus-two-rho
  - lem-pa36-flag-tdo-pbw-and-twist
  - lem-pa36-nilpotent-normality-and-springer-functions
  - lem-pa36-qcoh-filtered-union-and-cech-colimits
  - lem-harish-chandra-projection-computes-highest-weight-scalars
  - lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain
  - thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§6.2, Proposition 6.2.3 and Lemma 6.2.4, printed pp. 92–93; filtered global sections and Springer symbols"
    - title: "Yi Sun, D-modules and representation theory"
      url: "https://yisun.io/notes/dmod.pdf"
      locator: "§§4.5–4.6, Theorem 4.9 and Proposition 4.14, printed pp. 35–39; convention comparison only where corrected below"
---

## Statement

Assume the setup of [[def-pa36-flag-tdo-and-module]] and the Axiom of
Choice. For every complex $\kappa$, the infinitesimal action on
$\mathcal D_\kappa$ induces a filtered algebra isomorphism
$$A_\kappa=U(\mathfrak g)/U(\mathfrak g)\ker\chi_\kappa \xrightarrow{\sim}\Gamma(X,\mathcal D_\kappa),$$
where $\chi_\kappa(z)=\operatorname{pr}(z)(\kappa-\rho)$. No dominance,
regularity, or integrality condition is imposed on $\kappa$.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra with chosen positive system, $X=G/B$, arbitrary $\kappa\in\mathfrak h^*$, and the action-algebroid TDO $\mathcal D_\kappa$.

[F1] $\mathcal D_\kappa$ is a TDO with $\operatorname{gr}\mathcal D_\kappa=\operatorname{Sym}T_X$ and the infinitesimal action has its stated principal symbol ([[lem-pa36-flag-tdo-pbw-and-twist]]).

[F2] The PBW central quotient has associated graded the reduced coordinate ring $\mathbb C[N]$ of the nilpotent cone ([[lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain]]).

[F3] The Springer map is proper birational and pullback identifies $\mathbb C[N]\cong\Gamma(T^*X,\mathcal O)$ ([[lem-pa36-nilpotent-normality-and-springer-functions]]).

[F4] The canonical bundle is $\omega_X=\mathcal O_X(2\rho)$ in the associated-character convention of [[def-pa36-flag-tdo-and-module]] ([[lem-flag-variety-canonical-bundle-weight-minus-two-rho]]).

[F5] For a cyclic highest-weight module of highest weight $\lambda$, a central element $z$ acts by $\operatorname{pr}(z)(\lambda)$ ([[lem-harish-chandra-projection-computes-highest-weight-scalars]]).



## Proof

1.1 Let $\phi_\kappa:U(\mathfrak g)\to\Gamma(X,\mathcal D_\kappa)$ be the infinitesimal-action map. Use the fiber $Q=\mathcal D_{\kappa,eB}/\mathcal D_{\kappa,eB}\mathfrak m_{eB}$ for the right $\mathcal O_X$-module structure, and write $\delta$ for the class of $1$. This is a left $U(\mathfrak g)$-module. Choose local coordinates $t_j$ at $eB$ and a local differential-operator trivialization. For $b\in\mathfrak b$, its operator is $\sum_j f_j\partial_{t_j}+c_b$, with $f_j(eB)=0$ and $c_b(eB)=(\kappa+\rho)(b)$ by the isotropy relation. Moving coefficients to the right gives $b\delta=(c_b(eB)-\sum_j\partial_{t_j}f_j(eB))\delta$. The anchor action on functions is the negative of the tangent action on points, so its linear trace on $\mathfrak g/\mathfrak b$ is $2\rho(b)$, since the tangent weights are the negative roots; equivalently this is the canonical character in [F4]. Thus $b\delta=(\kappa-\rho)(b)\delta$, and $\mathfrak n^+\delta=0$. Negative-root vector fields span the tangent space at $eB$; PBW symbols [F1] show that their ordered monomials on $\delta$ span $Q$ by induction on order. Hence $Q$ is a cyclic highest-weight module of weight $\kappa-\rho$, so every central $z$ acts by $\operatorname{pr}(z)(\kappa-\rho)=\chi_\kappa(z)$ by [F5]. Equivariance gives the same scalar on every closed right fiber. Only Lie algebra characters were used, so no nonintegral line bundle is required. [F1, F4, F5, given, algebra]

2.1 Fix an order bound $m$. The space $U(\mathfrak g)_{\le m}$ is finite-dimensional by PBW, and $F_m\mathcal D_\kappa$ is locally free of finite rank as a right $\mathcal O_X$-module by the same PBW normal forms [F1]. For $z\in\ker\chi_\kappa$, the right $\mathcal O_X$-linear multiplication map $U(\mathfrak g)_{\le m}\otimes\mathcal O_X\to F_{m+d(z)}\mathcal D_\kappa$ given by $u\otimes f\mapsto\phi_\kappa(u(z-\chi_\kappa(z)))f$ is zero on every closed fiber by step 1.1. In local frames this is a finite matrix of regular functions vanishing at every closed point; $X$ is reduced and of finite type over $\mathbb C$, so each entry is zero. Thus $\phi_\kappa$ kills the whole two-sided central ideal and factors through a filtered map $\bar\phi_\kappa:A_\kappa\to\Gamma(X,\mathcal D_\kappa)$. This finite-rank argument does not apply Nakayama to an infinitely generated module. [F1, F2, step 1.1]

3.1 The associated-graded map fits into $$\mathbb C[N]\longrightarrow\operatorname{gr}A_\kappa \longrightarrow\operatorname{gr}\Gamma(X,\mathcal D_\kappa) \hookrightarrow\Gamma(X,\operatorname{gr}\mathcal D_\kappa) =\Gamma(T^*X,\mathcal O).$$ The last inclusion follows by applying the left-exact functor $\Gamma$ to each order-filtration sequence. The composite is pullback by the Springer moment map: for $x\in\mathfrak g$, its linear function on $N$ pulls back to the principal symbol of the vector field $x_X$, namely $\xi\mapsto\xi(x_X)$ on $T^*X$. Linear functions generate $\mathbb C[N]$ as a quotient of $S(\mathfrak g)$, so the two algebra maps agree on all generators. By [F3] the composite is an isomorphism. [F1, F2, F3, step 2.1]

4.1 Since the composite in [step 3.1] is an isomorphism and its right-hand map is injective, both intermediate associated-graded maps are isomorphisms. A filtered map with associated-graded isomorphism is an isomorphism: lift a target symbol and subtract a lift to lower the order until surjectivity holds; for injectivity, a nonzero kernel element would have a nonzero leading symbol in the graded kernel. Hence $\bar\phi_\kappa$ is the asserted filtered algebra isomorphism. The argument uses no order condition on $\kappa$. [step 3.1, algebra] ∎
