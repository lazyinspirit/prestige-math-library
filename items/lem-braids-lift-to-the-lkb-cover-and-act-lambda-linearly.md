---
id: lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly
kind: lemma
title: Braids lift to the LKB cover and act Lambda-linearly
status: published
origin: pipeline
deps: [thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, def-lkb-two-variable-covering-homomorphism, def-lawrence-krammer-bigelow-cover, def-axiom-of-choice, thm-covering-space-lifting-criterion, thm-homotopy-lifting-for-covering-maps, thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group, def-induced-homomorphism-on-fundamental-groups]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 1.2, printed p. 473: 'Any homeomorphism sigma in H(D,P) induces a homeomorphism from C to itself ... phi sigma = phi. Thus sigma lifts uniquely ... Moreover, this lift commutes with the covering transformations q and t.'"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed p. 3: the same lifting statement and the Lambda-module automorphism f_* of H_2(C-tilde)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

Assume AC. Every boundary-fixed homeomorphism $\sigma$ of $(D,P)$ inducing $\sigma_*$ on
$\pi_1(C,c_0)$ satisfies $\Phi\circ\sigma_*=\Phi$; hence it has a unique lift
$\widetilde\sigma$ fixing $\tilde c_0$, which commutes with every deck
transformation, and the induced map $\widetilde\sigma_*$ on
$H_2(\widetilde C)$ is a $\Lambda$-module automorphism. Composition of braid
classes corresponds to composition of these automorphisms, so
$[\sigma]\mapsto\widetilde\sigma_*$ is a well-defined homomorphism.

## Facts & Assumptions

**Given:** the standard configuration, a homeomorphism $\sigma:D\to D$ with $\sigma|_{\partial D}=\operatorname{id}$, $\sigma(P)=P$, and the induced basepoint-fixing homeomorphism of $C$, also written $\sigma$; the map $\Phi$, the LKB cover $\widetilde C$ and the ring $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$.

[F1] [[thm-covering-space-lifting-criterion]] gives existence and uniqueness of a based lift through a covering, and [[thm-homotopy-lifting-for-covering-maps]] lifts based homotopies uniquely. [[def-induced-homomorphism-on-fundamental-groups]] records the induced map $\sigma_*$.

[F2] [[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]]: the group of homeomorphisms of $D$ fixing $\partial D$ pointwise is connected, so $\sigma$ is isotopic to the identity relative to $\partial D$.

[F3] [[def-lkb-two-variable-covering-homomorphism]]: for a loop $\alpha(s)=\{\alpha_1(s),\alpha_2(s)\}$ one has $\Phi(\alpha)=q^at^b$ with $a$ is the total puncture winding of the integral one-cycle $\alpha_1+\alpha_2$ (the endpoints cancel even when labels exchange) and with $b$ the exponent of the image of $\alpha$ in the two-strand braid group.



## Proof

1.1 The homeomorphism $\sigma$ preserves $D\setminus P$, commutes with the interchange of coordinates and fixes $d_1,d_2\in\partial D$; it therefore induces a homeomorphism, again denoted $\sigma$, of $C$ with $\sigma(c_0)=c_0$. Its induced automorphism of $\pi_1(C,c_0)$ is $\sigma_*$ [[def-induced-homomorphism-on-fundamental-groups]]. [given, F1]

1.2 The assignment depends only on the isotopy class of $\sigma$ relative to $\partial D\cup P$. Once the based lifts are constructed below, an isotopy $\sigma_t$ from $\sigma$ to a homeomorphism $\sigma'$, relative to $\partial D\cup P$, induces a homotopy $H(s,t)$ of basepoint-fixing maps of $C$; lift $H$ starting from $\widetilde\sigma$ by [F1]. The lifted homotopy $\widetilde H$ satisfies $\widetilde H(-,t)(\tilde c_0)=\tilde c_0$ for every $t$: the path $t\mapsto\widetilde H(-,t)(\tilde c_0)$ lifts the constant path at $c_0$ and starts at $\tilde c_0$, so it is constant by uniqueness of path lifting [F1]. Therefore $\widetilde H(-,1)$ is the unique lift of $\sigma'$ fixing $\tilde c_0$, and it is homotopic to $\widetilde\sigma$ relative to the basepoint section; the induced maps on $H_2(\widetilde C)$ agree. [F1, construct]

2.1 One has $\Phi\circ\sigma_*=\Phi$. For the $a$-component, the tracks form an integral one-cycle $Z_\alpha=\alpha_1+\alpha_2$ in $D\setminus P$: its boundary is zero because the terminal unordered pair equals the initial pair. Winding is additive on this cycle, and [F3] gives $a(\alpha)=\sum_j\operatorname{wind}(Z_\alpha,p_j)$. A boundary-fixed disk homeomorphism is orientation preserving by [F2]. It sends a positively oriented small meridian about $p$ to a positively oriented Jordan meridian about $\sigma(p)$; hence it permutes the puncture winding coordinates of every one-cycle. Equivalently $\operatorname{wind}(\sigma_*Z_\alpha,p_j)=\operatorname{wind}(Z_\alpha,\sigma^{-1}(p_j))$. Summing gives $a(\sigma\circ\alpha)=a(\alpha)$. For the $b$-component, $b$ is the exponent of the image of $\alpha$ under the map $\pi_1(C,c_0)\to\pi_1(C_2(D),c_0)$ induced by forgetting the punctures, where $C_2(D)$ is the unordered two-point configuration space of the unpunctured disk. By [F2] choose an isotopy $\sigma_t$ from $\operatorname{id}$ to $\sigma$ relative to $\partial D$; forgetting the punctures turns it into a based homotopy from the identity of $C_2(D)$ to the homeomorphism induced by $\sigma$. Hence $\sigma$ induces the identity on $\pi_1(C_2(D),c_0)$ and therefore preserves the exponent $b$. Thus $\Phi(\sigma_*\alpha) =q^{a(\sigma\circ\alpha)}t^{b(\sigma\circ\alpha)}=q^{a(\alpha)}t^{b(\alpha)} =\Phi(\alpha)$ for every $[\alpha]$. [F2, F3, step 1.1, algebra]

3.1 By step 2.1 the automorphism $\sigma_*$ of $\pi_1(C,c_0)$ preserves $\ker\Phi=\pi_1(\widetilde C,\tilde c_0)$. The covering-space lifting criterion [F1] applied to $\sigma\circ p:(\widetilde C,\tilde c_0)\to(C,c_0)$ therefore produces a unique lift $\widetilde\sigma:(\widetilde C,\tilde c_0)\to(\widetilde C,\tilde c_0)$ with $p\circ\widetilde\sigma=\sigma\circ p$. [F1, step 2.1, construct]

4.1 The lift commutes with every deck transformation. Let $T$ be a deck transformation and let $\gamma$ be a loop in $C$ at $c_0$ representing the class corresponding to $T$ under $\operatorname{Deck}(\widetilde C/C)\cong\pi_1(C,c_0)/\ker\Phi$. Then $\widetilde\sigma T\widetilde\sigma^{-1}$ is again a deck transformation, and the class it corresponds to is $[\sigma\circ\gamma]$, whose image under $\Phi$ equals $\Phi([\gamma])$ by step 2.1. As the deck group is $\mathbb Z^2$ and the correspondence is through $\Phi$, the two deck transformations $\widetilde\sigma T\widetilde\sigma^{-1}$ and $T$ coincide. Hence $\widetilde\sigma T=T\widetilde\sigma$ for every $T$, and in particular $\widetilde\sigma$ commutes with the generators $q$ and $t$ of the deck group. [F1, step 2.1, step 3.1, algebra]

5.1 Consequently $\widetilde\sigma_*:H_2(\widetilde C;\mathbb Z)\to H_2(\widetilde C;\mathbb Z)$ is $\Lambda$-linear: it commutes with the deck automorphisms $q_*,t_*$ that define the module structure. It is invertible because $\sigma^{-1}$ is again a boundary-fixing homeomorphism of $(D,P)$ satisfying $\Phi\circ(\sigma^{-1})_*=\Phi$, so by step 3.1 it has a lift fixing $\tilde c_0$; the composite of the two lifts in either order is a lift of the identity fixing $\tilde c_0$, hence equals the identity of $\widetilde C$ by uniqueness in [F1]. Thus $\widetilde\sigma_*\in \operatorname{Aut}_\Lambda(H_2(\widetilde C;\mathbb Z))$. [step 3.1, step 4.1, construct]

6.1 The assignment is multiplicative. If $\tau$ is another such homeomorphism, then $\widetilde\sigma\circ\widetilde\tau$ lifts $\sigma\circ\tau$ and fixes $\tilde c_0$, so by uniqueness $\widetilde{\sigma\circ\tau}=\widetilde\sigma\circ\widetilde\tau$; on homology $(\widetilde{\sigma\circ\tau})_*=\widetilde\sigma_*\circ\widetilde\tau_*$. Together with step 1.2 this makes $[\sigma]\mapsto\widetilde\sigma_*$ a homomorphism from the boundary-fixed mapping class group to $\operatorname{Aut}_\Lambda(H_2(\widetilde C;\mathbb Z))$. [step 5.1, step 1.2, algebra]

7.1 Finally, the classical braid group is identified with the boundary-fixed mapping class group of the punctured disk by [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]], which is where the Axiom of Choice is used; under this identification the homomorphism of step 6.1 is the claimed map $[\sigma]\mapsto\widetilde\sigma_*$ on $B_n$. [step 6.1, given] ∎
