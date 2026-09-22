---
id: lem-kks-form-is-independent-of-lie-algebra-representatives
kind: lemma
title: The KKS formula is independent of the Lie-algebra representatives
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit, prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra, def-coadjoint-representation-of-a-lie-group, def-countable-choice, def-fundamental-vector-field-of-a-left-action]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.5, proof of Theorem 7.25, printed page 92
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Homework 17, printed pages 139--140
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\mathcal O$ be a coadjoint orbit and let
$\beta\in\mathcal O$. If $\xi,\xi'\in\mathfrak g$ satisfy
$\xi_{\mathcal O}(\beta)=\xi'_{\mathcal O}(\beta)$ then
$\beta([\xi,\eta])=\beta([\xi',\eta])$ for every $\eta\in\mathfrak g$; the same
holds in the second argument. Consequently the KKS formula

$$\omega_\beta\bigl(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta)\bigr) =\beta([\xi,\eta])$$

assigns a well-defined alternating bilinear form to each tangent space
$T_\beta\mathcal O$, since every tangent vector at $\beta$ is of the form
$\xi_{\mathcal O}(\beta)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a coadjoint orbit $\mathcal O$, a point $\beta\in\mathcal O$, and $\xi,\xi'\in\mathfrak g$ with $\xi_{\mathcal O}(\beta)=\xi'_{\mathcal O}(\beta)$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and orbit suppliers cited in [F1] and [F2].

[F1] The fundamental field of the coadjoint action satisfies $\xi_{\mathfrak g^*}(\beta)(\eta)=\beta([\xi,\eta])$ for all $\eta$. [[def-coadjoint-representation-of-a-lie-group]], [[def-fundamental-vector-field-of-a-left-action]].

[F2] The infinitesimal orbit map $\mathfrak g\to T_\beta\mathcal O$, $\xi\mapsto\xi_{\mathcal O}(\beta)$, has kernel the stabilizer Lie algebra $\mathfrak g_\beta$ and image all of $T_\beta\mathcal O$. [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]].

[F3] The KKS formula is $\omega_\beta(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta))=\beta([\xi,\eta])$. [[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]].

## Proof

**Proof technique:** direct.

1.1 Put $\zeta:=\xi'-\xi$. The hypothesis gives $\zeta_{\mathcal O}(\beta)=0$, so $\zeta$ lies in the kernel of the infinitesimal orbit map, that is $\zeta\in\mathfrak g_\beta$ by [F2]. [F2, given]

2.1 For every $\eta\in\mathfrak g$, [F1] evaluates the vanishing field at $\eta$ as $\zeta_{\mathfrak g^*}(\beta)(\eta)=\beta([\zeta,\eta])=0$. Hence $\beta([\xi',\eta])=\beta([\xi,\eta])+\beta([\zeta,\eta])=\beta([\xi,\eta])$ by bilinearity of the bracket. [step 1.1, F1]

3.1 The second argument is treated by alternation: if $\eta_{\mathcal O}(\beta)=\eta'_{\mathcal O}(\beta)$, then $\beta([\xi,\eta'])=\beta([\xi,\eta])$ by applying step 2.1 to $\eta,\eta'$ and using $\beta([\zeta,\cdot])=0$ for $\zeta\in\mathfrak g_\beta$; equivalently, the form $\beta([\cdot,\cdot])$ is alternating, so its value depends skew-symmetrically on the two arguments. [step 2.1, F1]

4.1 Since every tangent vector of $\mathcal O$ at $\beta$ equals $\xi_{\mathcal O}(\beta)$ for some $\xi\in\mathfrak g$ by [F2], steps 2.1 and 3.1 show that the KKS prescription depends only on the two tangent vectors, so it defines a unique bilinear alternating form on $T_\beta\mathcal O$. [step 2.1, step 3.1, F2, F3, A1] ∎
