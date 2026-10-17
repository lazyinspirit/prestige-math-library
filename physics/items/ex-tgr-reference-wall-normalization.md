---
id: ex-tgr-reference-wall-normalization
kind: example
title: "Reference-wall normalization preserves proper thermal and particle ratios"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-tgr-killing-energy-normalization, def-countable-choice, def-tgr-spacelike-current-slab]
dependency_roles:
  lem-tgr-killing-energy-normalization: mathematical-premise
  def-countable-choice: mathematical-premise
  def-tgr-spacelike-current-slab: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 5.3, 6.3, and 8.7"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "The Killing current, normal energy density, and finite boundary-flux setup are in sections 5.3, 6.3, and 8.7; the wall rescaling below is derived algebraically from the lemma."
    - title: "D. Tong, General Relativity, author-hosted full-text lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
      locator: "Chapter 4, section 4.5.5, subsection Conserved Energy from a Killing Vector; the selected wall normalization is an explicit consequence derived here."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapters 4–5 provide the stress-energy/Killing conventions used in the preceding lemma; no wall-specific empirical claim is imported."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Use the static subcase, finite coordinate slab, and open chart domain $U$ of [[lem-tgr-killing-energy-normalization]]. Adopt that lemma's SI convention: $x^0=ct_{\rm phys}$, the spatial coordinates $x^i$ are in metres, $c>0$ has units $\mathrm{m\,s^{-1}}$, and the metric components and length-normalized Killing field are dimensionless. Let $\xi=\partial_{x^0}$ be future timelike and orthogonal to the coordinate slices, and put $\mathcal N_\xi(q):=\sqrt{-g_q(\xi_q,\xi_q)}>0$ and $u_q:=\xi_q/\mathcal N_\xi(q)$ for $q\in U$. Let $W\subset U$ be a specified smooth embedded codimension-one submanifold whose induced metric has signature $(-,+,+)$ (a timelike cavity wall), and choose a reference event $q_{\rm ref}\in W$ in the static region. Put $\mathcal N_{\rm ref}:=\mathcal N_\xi(q_{\rm ref})>0$, which is dimensionless in this convention. No asymptotically flat end is assumed. Supply a function $\vartheta:U\to(0,\infty)$ assigned units kelvins and interpreted as the local proper temperature measured by observer field $u$, and a covector field $p$ on $U$ whose components have units $\mathrm{kg\,m\,s^{-1}}$. When a particle-energy interpretation is used, supply a vector field $P$ on $U$ that is future-directed and causal and satisfies $p_q=g_q(P_q,\cdot)$ at each $q\in U$; its components then have the same units as $p$ because the metric is dimensionless. Define, pointwise on $U$, $\mathcal T_\xi(q):=\mathcal N_\xi(q)\vartheta(q)$ and $E_\xi(p;q):=-c\,p_q(\xi_q)=-c\,p_a(q)\xi^a(q)$. Rescale the generator by $\widehat\xi:=\xi/\mathcal N_{\rm ref}$. The reference lapse is then $\widehat{\mathcal N}_\xi(q_{\rm ref})=1$, while the normalized temperature and particle-energy ratios at every $q\in U$ are unchanged:
$$\frac{\mathcal T_{\widehat\xi}(x)}{\widehat{\mathcal N}_\xi(x)}=\frac{\mathcal T_\xi(x)}{\mathcal N_\xi(x)}=\vartheta(x),\qquad \frac{E_{\widehat\xi}(p;x)}{\widehat{\mathcal N}_\xi(x)}=\frac{E_\xi(p;x)}{\mathcal N_\xi(x)}=-c\,p_a(x)u^a(x).$$
For each slice charge defined in [[lem-tgr-killing-energy-normalization]], $H_{\widehat\xi}=H_\xi/\mathcal N_{\rm ref}$. This choice is meaningful in a finite cavity without an asymptotic normalization; it does not make $\vartheta$ spatially constant or assert that distinct reference-wall choices produce equal local temperatures.

## Facts & Assumptions

**Given:** The exact finite static-slice current and rescaling clauses of [[lem-tgr-killing-energy-normalization]], its finite rectangular slab convention, a positive reference lapse at $q_{\rm ref}$, and supplied fields $\vartheta>0$ and $p_a$ with the units and causal-momentum condition stated above.

[A1] Assume $\mathrm{AC}_\omega$, the Axiom of Countable Choice, as required by the connection construction and recorded in [[def-countable-choice]].

[F1] In its static subcase, [[lem-tgr-killing-energy-normalization]] derives $H_{a\xi}=aH_\xi$, $\mathcal N_{a\xi}=a\mathcal N_\xi$, and $u_{a\xi}=u_\xi$ for every dimensionless $a>0$; it defines the mechanical pairing $E_\xi(p)=-c\,p_a\xi^a$. Its finite charge uses the open spatial rectangle with compact closure specified by MI01.

[F2] The SI reading of [[lem-tgr-killing-energy-normalization]] takes $x^0=ct$ with $c>0$ in $\mathrm{m\,s^{-1}}$, spatial coordinates in metres, dimensionless metric components, and $\xi$ normalized so that its flow parameter has units of length. Thus $\mathcal N_\xi$ and $\mathcal N_{\rm ref}$ are dimensionless, and the pairing factor $c$ in $E_\xi(p;q)$ has units $\mathrm{m\,s^{-1}}$.

[L1] [[def-tgr-spacelike-current-slab]] defines a positively oriented product slab with open spatial rectangle and compact closure with spacelike slices, future unit normal, and proper spatial volume $dV_h=\sqrt{\det h}\,d^3x$. It assigns no physical units to its mathematical coordinates; this example's SI length convention is additional data.

[A2] $W\subset U$ is a specified smooth timelike embedded hypersurface, $q_{\rm ref}\in W$ is the selected event in the static region, and $\mathcal N_{\rm ref}=\mathcal N_\xi(q_{\rm ref})>0$. The supplied fields are $\vartheta:U\to(0,\infty)$ and $p\in\Gamma(T^*U)$ with the units in the Statement. For the particle-energy interpretation, $P$ is a future-directed causal vector field on $U$ and $p_q=g_q(P_q,\cdot)$ for every $q\in U$.

## Verification

1.1 Since $\widehat\xi=a\xi$ with $a=1/\mathcal N_{\rm ref}>0$, its norm satisfies $\widehat{\mathcal N}_\xi(x)=\mathcal N_\xi(x)/\mathcal N_{\rm ref}$, and $\widehat{\mathcal N}_\xi(q_{\rm ref})=1$. The normalized field $u=\xi/\mathcal N_\xi$ is unchanged. [A2, F1, F2, given, algebra]

2.1 The temperature definition gives $\mathcal T_{\widehat\xi}(q)=\mathcal T_\xi(q)/\mathcal N_{\rm ref}$; the mechanical pairing gives $E_{\widehat\xi}(p;q)=E_\xi(p;q)/\mathcal N_{\rm ref}$; and [F1] gives the same scaling for the finite Killing charge. Dividing by $\widehat{\mathcal N}_\xi(q)=\mathcal N_\xi(q)/\mathcal N_{\rm ref}$ proves both displayed ratio identities and the charge statement. [A1, F1, F2, L1, step 1.1, given, algebra]

3.1 The right sides of the ratio identities are the supplied $\vartheta(x)$ and the contraction $-c\,p_a u^a$. Neither definition imposes spatial constancy, so the normalization calculation proves neither thermal equilibrium nor equality between distinct wall choices. [step 2.1, given, algebra] ∎
