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
$$A_\kappa=U(\mathfrak g)/U(\mathfrak g)\ker\chi_\kappa
\xrightarrow{\sim}\Gamma(X,\mathcal D_\kappa),$$
where $\chi_\kappa(z)=\operatorname{pr}(z)(\kappa-\rho)$. No dominance,
regularity, or integrality condition is imposed on $\kappa$.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra with chosen positive system,
$X=G/B$, arbitrary $\kappa\in\mathfrak h^*$, and the action-algebroid TDO
$\mathcal D_\kappa$.

[F1] $\mathcal D_\kappa$ is a TDO with
$\operatorname{gr}\mathcal D_\kappa=\operatorname{Sym}T_X$ and the infinitesimal
action has its stated principal symbol
([[lem-pa36-flag-tdo-pbw-and-twist]]).

[F2] The PBW central quotient has associated graded the reduced coordinate
ring $\mathbb C[N]$ of the nilpotent cone
([[lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain]]).

[F3] The Springer map is proper birational and pullback identifies
$\mathbb C[N]\cong\Gamma(T^*X,\mathcal O)$
([[lem-pa36-nilpotent-normality-and-springer-functions]]).

[F4] The canonical bundle is $\omega_X=\mathcal O_X(2\rho)$ in the
associated-character convention of
[[def-pa36-flag-tdo-and-module]]
([[lem-flag-variety-canonical-bundle-weight-minus-two-rho]]).

[F5] For a cyclic highest-weight module of highest weight $\lambda$, a
central element $z$ acts by $\operatorname{pr}(z)(\lambda)$
([[lem-harish-chandra-projection-computes-highest-weight-scalars]]).

## Proof

1.1 Let $\phi_\kappa:U(\mathfrak g)\to\Gamma(X,\mathcal D_\kappa)$ be the
filtered map from the infinitesimal action. Its central character is exactly
$\chi_\kappa$. At $eB$, the right-Verma fiber of the action-algebroid
filtration is induced from the isotropy character on the source line
$\mathcal O_X(\kappa+\rho)^*$ tensored with the canonical line
$\omega_X$. By [F4] the latter character is $2\rho$, so this inducing
character is $-(\kappa+\rho)+2\rho=\rho-\kappa$. Converting the right action
to a left action by the principal antiautomorphism $x\mapsto-x$ gives the
highest weight $\kappa-\rho$. The central scalar is therefore
$\operatorname{pr}(z)(\kappa-\rho)=\chi_\kappa(z)$ by [F5]. The calculation
is $G$-equivariant, so it holds at every closed point of $X$. [F1, F4, F5,
given]

1.2 Fix an order bound $m$. The space $U(\mathfrak g)_{\le m}$ is
finite-dimensional by PBW, and $F_m\mathcal D_\kappa$ is locally free of
finite rank by [F1]. For $z\in\ker\chi_\kappa$, the multiplication map
$\mathcal O_X\otimes U(\mathfrak g)_{\le m}\to F_{m+d(z)}\mathcal D_\kappa$
given by $u\mapsto\phi_\kappa(u(z-\chi_\kappa(z)))$ is zero on every closed
fiber by step 1.1. In local frames this is a finite matrix of regular
functions vanishing at every closed point; $X$ is reduced and of finite type
over $\mathbb C$, so each entry is zero. Thus $\phi_\kappa$ kills the whole
two-sided central ideal and factors through a filtered map
$\bar\phi_\kappa:A_\kappa\to\Gamma(X,\mathcal D_\kappa)$. This finite-rank
argument does not apply Nakayama to an infinitely generated module. [F1, F2,
step 1.1]

2.1 The associated-graded map fits into
$$\mathbb C[N]\longrightarrow\operatorname{gr}A_\kappa
\longrightarrow\operatorname{gr}\Gamma(X,\mathcal D_\kappa)
\hookrightarrow\Gamma(X,\operatorname{gr}\mathcal D_\kappa)
=\Gamma(T^*X,\mathcal O).$$
The last inclusion follows by applying the left-exact functor $\Gamma$ to
each order-filtration sequence. The composite is pullback by the Springer
moment map: for $x\in\mathfrak g$, its linear function on $N$ pulls back to
the principal symbol of the vector field $x_X$, namely
$\xi\mapsto\xi(x_X)$ on $T^*X$. Linear functions generate $\mathbb C[N]$ as
a quotient of $S(\mathfrak g)$, so the two algebra maps agree on all
generators. By [F3] the composite is an isomorphism. [F1, F2, F3, step 1.2]

3.1 Since the composite in [step 2.1] is an isomorphism and its right-hand
map is injective, both intermediate associated-graded maps are isomorphisms.
A filtered map with associated-graded isomorphism is an isomorphism: lift a
target symbol and subtract a lift to lower the order until surjectivity holds;
for injectivity, a nonzero kernel element would have a nonzero leading symbol
in the graded kernel. Hence $\bar\phi_\kappa$ is the asserted filtered
algebra isomorphism. The argument uses no order condition on $\kappa$.
[step 2.1, algebra] ∎
