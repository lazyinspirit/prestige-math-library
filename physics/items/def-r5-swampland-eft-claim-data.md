---
id: def-r5-swampland-eft-claim-data
kind: definition
title: "Scalar, gauge and theory-family data for swampland conjectures"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 1
deps: ["def-r5-cosmology-4d-scalar-eft-data"]
dependency_roles:
  "def-r5-cosmology-4d-scalar-eft-data": "formulation-prerequisite"
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "On the Geometry of the String Landscape and the Swampland"
      url: "https://arxiv.org/pdf/hep-th/0605264v1"
      locator: "Complete primary paper inspected, PDF pp. 1–5, including its conjectural distance criterion and examples."
    - title: "The String Landscape, Black Holes and Gravity as the Weakest Force"
      url: "https://arxiv.org/pdf/hep-th/0601001v2"
      locator: "Complete primary paper inspected; PDF pp. 1–4 for electric WGC formulations and pp. 11–12 for the axionic specialization."
    - title: "Distance and de Sitter Conjectures on the Swampland"
      url: "https://arxiv.org/pdf/1810.05506v2"
      locator: "Complete primary paper inspected, especially PDF pp. 1–5, for the refined de Sitter proposal and its explicitly conjectural status."
    - title: "AdS and the Swampland"
      url: "https://arxiv.org/pdf/1906.05225v2"
      locator: "Complete primary paper inspected, PDF pp. 1–5, for the AdS distance conjecture, the supersymmetric strong form, and the distinct scale-separation question."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "Full text reviewed selectively at the exact sections/pages listed per harvested claim; this is a status review, not a proof source."
    - title: "Eran Palti, The Swampland: Introduction and Review, arXiv:1903.06239v3"
      url: "https://arxiv.org/pdf/1903.06239v3"
      locator: "Introduction and review framework, PDF pp. 5–8; distance/WGC conventions, pp. 23–31; emergence, pp. 128–137."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "Introduction, PDF pp. 5–8, and swampland framing, pp. 138–143; full lecture notes."
physical_scope: "Definition of a source-labelled swampland claim datum and its dimensions, frame, EFT/QG class, scalar/gauge data, cutoff, tower, family limit, and epistemic status. It defines comparison conventions only; it proves no conjecture and says no specific EFT has a quantum-gravity completion."
---

## Definition

A **swampland-claim datum** specifies the dimension/frame/Planck normalization, quantum-gravity or EFT class, scalar target and metric, potential or gauge group/coupling/charge data, cutoff and tower spectrum, asymptotic/family limit, and whether a proposed inequality is a conjecture, a controlled conditional result or a model-specific example.

Here an **effective field theory (EFT)** means a low-energy description with a specified retained field content, cutoff, and domain of validity; a quantum-gravity class names the proposed ultraviolet completion family and its stated restrictions. A frame specifies the metric used to measure masses, distances, and energies. Throughout, “order-one” means a fixed positive dimensionless constant independent of the family limit unless the chosen conjectural version states otherwise.

More explicitly, in natural units $\hbar=c=1$, choose an integer spacetime dimension $d\geq3$, a spacetime signature and a frame. In an Einstein frame write the gravitational term as $M_{P,d}^{d-2}R/2$, with $M_{P,d}^{d-2}:=(8\pi G_d)^{-1}$; thus $M_{P,d}$ has mass dimension one. In $d=4$ use the earlier four-dimensional Einstein-frame scalar-EFT datum: its smooth Lorentzian spacetime $\mathcal X$, smooth scalar field $\phi:\mathcal X\to\mathcal T$, kinetic term $-G_{ij}(\phi)g^{\mu\nu}\partial_\mu\phi^i\partial_\nu\phi^j/2$, and constant reduced Planck mass $M_P>0$. A change of frame is additional supplied data, and bounds are compared only after translating all masses and couplings into the same frame.

The scalar data consist of a finite-dimensional smooth target manifold $\mathcal T$, a smooth positive-definite Riemannian metric $G$, and any smooth potential $V:\mathcal T\to\mathbb R$. When spacetime scalar configurations are used, supply a smooth Lorentzian $d$-manifold $(\mathcal X,g)$ of the declared signature and a smooth map $\phi:\mathcal X\to\mathcal T$. A scalar-target path is instead a continuous map $\gamma:J\to\mathcal T$ on a specified real interval $J\subseteq\mathbb R$; require piecewise $C^1$ regularity on each compact subinterval whenever its length is used. It need not be the restriction of $\phi$ to a spacetime curve. Whenever a gradient or Hessian bound is proposed, $V$ is at least $C^2$, $|\nabla V|$ means the norm induced by $G$, and Hessian eigenvalues are generalized eigenvalues relative to $G$ (equivalently, eigenvalues in a $G$-orthonormal frame); a least eigenvalue requires a nonzero-dimensional target. If a distance is used, it is the infimum of $G$-lengths of piecewise-$C^1$ paths between the specified points, with the infimum of an empty path set equal to $+\infty$; distance to an asymptotic region is a separately specified limit of such distances, not an assumed global coordinate.

Gauge data name the compact internal gauge group $K$ and its global form, kinetic normalization and coupling, and allowed charge data. Here “compact” means compact as a topological group; the global form is the actual group, including any quotient by a discrete central subgroup, rather than only its Lie algebra. A one-dimensional unitary character is a continuous homomorphism $\chi:K\to U(1)$, where $U(1)=\{z\in\mathbb C:|z|=1\}$ under multiplication. The character group $X^*(K):=\operatorname{Hom}_{\rm cts}(K,U(1))$ has pointwise multiplication. A lattice here means a free abelian group of finite rank, that is, a group isomorphic to $\mathbb Z^r$ for an integer $r\geq0$; a general character group need not be a lattice. For example, for the discrete compact group $K=\mathbb Z/2\mathbb Z$, a character sends its generator to $1$ or $-1$, so $X^*(K)\cong\mathbb Z/2\mathbb Z$, which is not a lattice. For a torus $K=U(1)^r$ with declared circle coordinates, the characters are $\chi_q(z_1,\ldots,z_r)=\prod_{j=1}^r z_j^{q_j}$ for $q\in\mathbb Z^r$; thus $X^*(K)\cong\mathbb Z^r$ is its character lattice. In particular, for $U(1)$ a declared unit-weight convention identifies this lattice with $\mathbb Z$, without asserting a unit-charge dynamical state. The allowed charge data are distinguished from the charges actually carried by dynamical states. A kinetic matrix, charge basis, and any duality frame are specified whenever needed; non-Abelian charge data are representations of the stated global group, not an unlabelled integer.

An EFT datum also gives a positive Wilsonian cutoff $\Lambda_{\rm EFT}$, its field/spacetime regime, and a tower spectrum, when relevant: an indexed collection of states with masses $m_n(\lambda)$ in a stated family parameter $\lambda$. The meaning of the characteristic tower gap $m_{\rm tower}$ and its asymptotic scaling are declared for that tower. If a species scale is invoked, state the counting convention $N(E)$, the number of distinct species of mass below $E$ with any degeneracy convention declared, and use only the parametric relation $\Lambda_{\rm sp}^{d-2}\sim M_{P,d}^{d-2}/N(\Lambda_{\rm sp})$ within its range of validity; this estimate is not an exact identity. The omitted states, derivative range, and any control assumptions needed for the effective description are stated.

Finally specify the class of quantum-gravity theories or EFTs, the family and limiting procedure, the normalization of each proposed dimensionless inequality, and an epistemic label: **conjecture**, **controlled conditional result** with all extra hypotheses, or **model-specific example**. The label records status; it does not establish the inequality, derive a postulate, or convert an example into a universal claim.

## Definition references

[[def-r5-cosmology-4d-scalar-eft-data]]
