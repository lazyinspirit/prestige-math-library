---
id: op-type-iib-full-sl2z-s-duality
kind: open-problem
title: Type Iib Full Sl2z S Duality
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-iib-axiodilaton-and-pq-string-charge
dependency_roles:
  def-iib-axiodilaton-and-pq-string-charge: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The exact nonperturbative type-IIB equivalence problem over the asymptotic axiodilaton family, with SL(2,Z) on bosonic charge/background data and an explicitly specified fermionic lift and anomaly composition law on the complete quantum theory. Classical covariance and protected matching are limited theoretical evidence."
sources:
  references:
    - title: "J. H. Schwarz, An SL(2,Z) Multiplet of Type IIB Superstrings, arXiv:hep-th/9508143v5"
      url: "https://arxiv.org/pdf/hep-th/9508143v5"
      locator: "Introduction and §§2–4: classical source-coupled (p,q)-string solutions and the source's characterization of full-theory duality as evidence."
    - title: "C. M. Hull and P. K. Townsend, Unity of Superstring Dualities, arXiv:hep-th/9410167v2"
      url: "https://arxiv.org/pdf/hep-th/9410167v2"
      locator: "Abstract and §§1–3, 7–8: S- and U-duality groups, charge-lattice evidence, and the conjectural extension to the full quantum string theory."
    - title: "Angel M. Uranga, Introduction to String Theory, full lecture notes"
      url: "https://members.ift.uam-csic.es/auranga/Lect.pdf"
      locator: "§14.3.1, printed pp. 290–291, and Appendix B.2, printed pp. 324–326: classical IIB covariance and the proposed exact discrete symmetry."
    - title: "Tony Pantev and Eric Sharpe, Duality group actions on fermions, arXiv:1609.00011v2"
      url: "https://arxiv.org/html/1609.00011v2"
      locator: "§2 defines the metaplectic pairs and product; §5 derives the square-root sign ambiguity for redefined IIB fermions and proposes the double cover. This does not construct the full quantum theory."
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Open problem

Use the ordered charge labels $Q=(p,q)^{\mathsf T}\in\mathbb Z^2$ and asymptotic modulus $\tau\in\mathbb H:=\{z\in\mathbb C:\operatorname{Im}z>0\}$. For $\Lambda=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in G:=\mathrm{SL}(2,\mathbb Z)$, the proposed bosonic action sends $\tau$ to $\Lambda\cdot\tau=(a\tau+b)/(c\tau+d)$ and $Q$ to $\Lambda Q$. Construct an exact nonperturbative type-IIB quantum theory over this background family and establish equivalences on all its states and observables, including the NS–NS and RR sectors, fermions, branes, amplitudes and partition functions. Here nonperturbative data include contributions not determined by the expansion in the coupling $e^{\Phi_\infty}$; brane sectors are sectors carrying charges coupled to the corresponding differential-form gauge potentials.

Specify the fermionic lift rather than assuming that $G$ acts strictly on every state. A concrete candidate is the metaplectic group $\widetilde G=\mathrm{Mp}(2,\mathbb Z)$: its elements are pairs $(\Lambda,f)$ with $f:\mathbb H\to\mathbb C$ holomorphic and $f(\tau)^2=c\tau+d$, with product $(\Lambda,f)(\Gamma,h)=(\Lambda\Gamma,(f\circ\Gamma)h)$, where $\Gamma$ acts by the same fractional linear map. The projection $\rho(\Lambda,f)=\Lambda$ has central kernel $\{(I,1),(I,-1)\}$. Determining the physically correct lift and any remaining quantum obstruction is part of the problem, not an established consequence of the bosonic action.

More precisely, a Hilbert-space formulation must supply, for each $\tau$, a complex Hilbert space $\mathcal H_\tau$, a unital complex associative observable algebra $\mathcal A_\tau$ with conjugate-linear involution $A\mapsto A^*$ satisfying $(AB)^*=B^*A^*$, and a unital *-representation $\pi_\tau:\mathcal A_\tau\to\mathcal B(\mathcal H_\tau)$. Here $\mathcal B(\mathcal H_\tau)$ is the algebra of bounded linear operators; unbounded observables require specified dense domains. Equivalence for $\tilde g\in\widetilde G$ consists of a unitary $U_{\tilde g,\tau}:\mathcal H_\tau\to\mathcal H_{\rho(\tilde g)\cdot\tau}$ and a *-isomorphism $V_{\tilde g,\tau}:\mathcal A_\tau\to\mathcal A_{\rho(\tilde g)\cdot\tau}$ intertwining the representations, so that $U_{\tilde g,\tau}\pi_\tau(A)U_{\tilde g,\tau}^{-1}=\pi_{\rho(\tilde g)\cdot\tau}(V_{\tilde g,\tau}(A))$. Require the charge transformation above and preservation of the specified dynamics and all observable data, together with the derived transformation laws for amplitudes and partition functions. General elements relate different backgrounds; only elements fixing $\tau$ act within $\mathcal H_\tau$.

In the absence of a residual anomaly, require identity maps at the group identity and $U_{\tilde g,\rho(\tilde h)\cdot\tau}U_{\tilde h,\tau}=U_{\tilde g\tilde h,\tau}$, with the analogous law for $V$. The central element $(I,-1)$ may act by fermion parity, an involution $P_\tau$ with $P_\tau^2=I$ whose $+1$ and $-1$ eigenspaces define even and odd states; its action must be specified. A residual anomaly means an obstruction to these exact composition laws after the lift. If the maps instead compose up to phases or require a further extension, determine those phases or extension and their associative composition law explicitly. The target is a complete, anomaly-consistent quantum equivalence; classical supergravity covariance and protected-sector matching alone do not establish it.

## Open problem references

[[def-iib-axiodilaton-and-pq-string-charge]]

[Schwarz, Introduction and §§2–4](https://arxiv.org/pdf/hep-th/9508143v5)

[Hull and Townsend, Abstract, §§1–3, 7–8](https://arxiv.org/pdf/hep-th/9410167v2)

[Uranga, §14.3.1 and Appendix B.2](https://members.ift.uam-csic.es/auranga/Lect.pdf)

[Pantev and Sharpe, §§2 and 5](https://arxiv.org/html/1609.00011v2)

## Status

Status reviewed 2026-11-05 at the bounded source scope stated here: Schwarz's introduction and classical string construction and Hull–Townsend's abstract/introduction present full quantum duality as a proposal supported by restricted calculations. Pantev–Sharpe §5 identifies sign ambiguities for fermions and proposes a metaplectic lift; this is additional formulation data, not a construction of all states or a full equivalence proof. No solution is supplied here. This disposition does not claim an exhaustive survey of subsequent publications.

## Remarks

[[pthm-iib-pq-string-bps-tension-covariance]] proves conditional algebraic covariance of the adopted classical tension formula. It is a separate partial result and theoretical motivation, not a prerequisite for formulating or a proof of this open problem.
