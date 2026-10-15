---
id: ex-qft-qed-two-polarizations
kind: example
title: Two physical photon fibers without global frame
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - def-euclidean-inner-product
  - def-cross-product-in-r3
  - lem-cross-product-is-bilinear-alternating-and-orthogonal
  - thm-cross-product-norm-is-the-two-vector-gram-determinant
  - def-qft-photon-transverse-space
  - lem-qft-photon-null-quotient
  - lem-qft-photon-no-global-polarization-frame
dependency_roles:
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  lem-qft-photon-null-quotient: mathematical-premise
  lem-qft-photon-no-global-polarization-frame: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.2.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; transverse photon polarization vectors and physical degrees of freedom.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§54–56
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; Coulomb-gauge transverse modes and polarization vectors.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Assume Countable Choice. For each nonzero $\mathbf k$, the physical photon fiber is the real plane $n^\perp$ (or its complexification), where $n=\mathbf k/|\mathbf k|$, and therefore has dimension two. Locally in direction space one can choose two continuous orthonormal polarization vectors. There is no continuous real orthonormal polarization frame on all of $S^2$. The global subsidiary quotient $\mathcal K_0/\mathcal N$ of [[lem-qft-photon-null-quotient]] is isometric to the transverse space $\mathcal H_T$ of square-integrable sections from [[def-qft-photon-transverse-space]]. At a fixed direction $n$, the auxiliary fiber $K_{0,n}=\{(a,v)\in\mathbb C\times\mathbb C^3:n\cdot v=a\}$, with form $[(a,v),(b,w)]_\eta=-\overline a b+\overline v\cdot w$, has radical $N_n=\mathbb C(1,n)$ and quotient isometric to the complex transverse plane. Thus four auxiliary components do not represent four positive physical polarizations; the global section space is not a single fiber.

## Facts & Assumptions

**Given:** Countable Choice; the transverse projection, the subsidiary quotient, and the no-global-frame lemma.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] The range of $P_T(n)=I-nn^T$ is the rank-two plane $n^\perp$. [[def-qft-photon-transverse-space]]

[F2] The global subsidiary quotient $\mathcal K_0/\mathcal N$ is isometric to $\mathcal H_T$ by $[\epsilon]\mapsto\boldsymbol\epsilon-n\epsilon^0$; these are spaces of square-integrable sections. [[lem-qft-photon-null-quotient]]

[F3] The transverse planes over $S^2$ admit no global continuous real orthonormal frame. [[lem-qft-photon-no-global-polarization-frame]]

[F4] The cross product is orthogonal to both factors and satisfies $\|u\times v\|^2=\|u\|^2\|v\|^2-\langle u,v\rangle^2$. [[def-cross-product-in-r3]] [[lem-cross-product-is-bilinear-alternating-and-orthogonal]] [[thm-cross-product-norm-is-the-two-vector-gram-determinant]]

## Verification

**Given:** [A1] and [F1]–[F3].

1.1 Since $n$ is unit, $P_T(n)=I-nn^T$ has kernel $\mathbb R n$ and range $n^\perp$, of dimension $3-1=2$, by [F1]. For any fixed unit vector $u$ not parallel to $n_0$, $P_T(n)u$ is nonzero on a neighborhood of $n_0$; there define $e_1(n)=P_T(n)u/|P_T(n)u|$ and $e_2(n)=n\times e_1(n)$. By [F4], $e_2$ is orthogonal to both unit vectors and $|e_2|^2=1-0=1$. It is therefore a continuous unit vector in $n^\perp$, orthogonal to $e_1$, so the two vectors form a local frame. [A1, F1, F4, given, construct]

2.1 For the fixed-direction fiber in the example, define $T_n(a,v)=v-na$. Since $n\cdot v=a$ and $n\cdot n=1$, its image lies in $n^\perp\subset\mathbb C^3$, and $T_n(0,z)=z$ for every $z\in n^\perp$. Writing $v=T_n(a,v)+na$ and $w=T_n(b,w)+nb$ gives $[(a,v),(b,w)]_\eta=\overline{T_n(a,v)}\cdot T_n(b,w)$. Its radical is therefore $\ker T_n=\mathbb C(1,n)$: a radical vector pairs with itself to give $\|T_n(a,v)\|^2=0$, and every kernel vector pairs to zero with all others. Thus $[(a,v)]\mapsto T_n(a,v)$ is a positive isometry of $K_{0,n}/N_n$ onto the two-complex-dimensional plane of step 1.1. In contrast, [F2] identifies the global quotient with $\mathcal H_T$, the space of square-integrable sections of these planes. A global continuous real frame would contradict [F3], so the local construction cannot extend over the whole sphere. [F1, F2, F3, step 1.1, algebra] ∎
