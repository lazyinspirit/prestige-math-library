---
id: lem-sr-observer-stress-energy-decomposition
kind: lemma
title: "Observer decomposition of a symmetric stress-energy tensor"
status: draft
origin: pipeline
domain: mathematics
deps: [def-sr-stress-energy-tensor-and-force-density, thm-sr-proper-time-and-observer-decomposition, def-ck-tensor-field-on-minkowski-space, def-lorentz-form-and-inertia, def-sr-affine-minkowski-model]
dependency_roles:
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $(A,V,\eta,C^+)$ be the affine Minkowski model, $c>0$, $\Omega\subseteq A$ open, and let $T$ be a continuous symmetric type-$(2,0)$ tensor field on $\Omega$ ([[def-sr-stress-energy-tensor-and-force-density]]). Let $n\in V$ be future unit, $\eta(n,n)=-1$, with rest projection $h(v)=v+\eta(n,v)n$ and $h^a{}_b=\delta^a{}_b+n^an_b$ as in [[thm-sr-proper-time-and-observer-decomposition]]\,(c). At a point $p\in\Omega$ define $\varepsilon:=T^{ab}n_an_b$, $\pi^a:=-c^{-1}h^a{}_bT^{bc}n_c$ and $S^{ab}:=h^a{}_ch^b{}_dT^{cd}$. Then: (a) $\pi$ lies in $n^\perp$, $S$ is symmetric and horizontal in both slots ($S^{ab}n_b=n_aS^{ab}=0$), and $$T^{ab}=\varepsilon\,n^an^b+c\,(n^a\pi^b+\pi^an^b)+S^{ab}.$$ (b) Contracting with $n$ gives $T^{ab}n_b=-\varepsilon n^a-c\pi^a$; hence $\varepsilon$ and $\pi$ are determined by $T$ and $n$, and the decomposition is unique among decompositions $T^{ab}=\varepsilon' n^an^b+c(n^a\pi'^b+\pi'^an^b)+S'^{ab}$ with $\pi'\in n^\perp$ and $S'$ symmetric horizontal: $\varepsilon'=\varepsilon$, $\pi'=\pi$, $S'=S$. (c) In any adapted inertial orthonormal frame with $n=e_0$, the numerical components of this decomposition are $\varepsilon=T^{00}$, $\pi^0=0$, $\pi^i=T^{0i}/c$ and $S^{0a}=S^{a0}=0$, $S^{ij}=T^{ij}$ for $i,j=1,2,3$. Define isotropic rest stress to mean $S^{ab}=p h^{ab}$ for a real scalar $p$, where $h^{ab}:=\eta^{ab}+n^an^b$. Thus $S=0$ means vanishing rest stress, and is the isotropic case $p=0$; isotropy permits any $p$, including nonzero pressure or tension. These are numerical tensor identities. Physical adoption of the energy/momentum-density reading is a separate model premise; this mathematical lemma asserts no observer measurement. No choice principle is used.

## Facts & Assumptions

**Given:** The affine Minkowski model with inertial chart $x$, its constant metric components $\eta_{ab}$, the inverse components $\eta^{ab}$ and the index conventions of [[def-lorentz-form-and-inertia]] and [[def-sr-affine-minkowski-model]]; a continuous symmetric type-$(2,0)$ field $T$ on $\Omega$ ([[def-sr-stress-energy-tensor-and-force-density]], [[def-ck-tensor-field-on-minkowski-space]]); a future unit vector $n\in V$, so $n_an^a=\eta(n,n)=-1$, with $n^\perp=\{v:\eta(n,v)=0\}$ and $h^a{}_b=\delta^a{}_b+n^an_b$ ([[thm-sr-proper-time-and-observer-decomposition]]\,(c)). All components below are taken at one fixed point and the components $T^{ab}$ are those of $T$ in an inertial chart.

[F1] Rest-space projector. The map $h(v)=v+\eta(n,v)n$ is linear and idempotent, has image $n^\perp$ and kernel $\operatorname{span}(n)$, satisfies $h(n)=0$ and $\eta(n,h(v))=0$ for all $v$; in components $h^a{}_b=\delta^a{}_b+n^an_b$, so $h^a{}_bn^b=0=n_a h^a{}_b$ and $h^a{}_ch^c{}_b=h^a{}_b$. ([[thm-sr-proper-time-and-observer-decomposition]]\,(c))

[F2] Component conventions and symmetry: $T^{ab}=T^{ba}$, $\delta^a{}_b=h^a{}_b-n^an_b$, and index lowering commutes with the algebra. ([[def-sr-stress-energy-tensor-and-force-density]])

## Proof

**Proof technique:** direct.

1.1 Projector identities. From [F1], $n_an^a=-1$; $h^a{}_bn^b=0$, $n_ah^a{}_b=0$ and $h^a{}_ch^c{}_b=h^a{}_b$; moreover $\delta^a{}_c=h^a{}_c-n^an_c$. [F1, given]

2.1 Expansion and horizontality. Using $\delta^a{}_c\delta^b{}_d=(h^a{}_c-n^an_c)(h^b{}_d-n^bn_d)$ from step 1.1 and the symmetry $T^{cd}=T^{dc}$ of [F2], expand $$T^{ab}=(h^a{}_c-n^an_c)(h^b{}_d-n^bn_d)T^{cd}=S^{ab}-n^b\,h^a{}_cT^{cd}n_d-n^a\,h^b{}_dT^{dc}n_c+n^an^b\,n_cn_dT^{cd};$$ with the definitions of $\varepsilon$, $\pi$ and $S$ this is $T^{ab}=S^{ab}+c\,n^b\pi^a+c\,n^a\pi^b+\varepsilon\,n^an^b$. Moreover $\pi\in n^\perp$ because $n_a\pi^a=-c^{-1}n_ah^a{}_bT^{bc}n_c=0$, and $S$ is symmetric because $h^a{}_ch^b{}_dT^{cd}=h^b{}_dh^a{}_cT^{dc}$; finally $S^{ab}n_b=h^a{}_ch^b{}_dT^{cd}n_b=0$ and $n_aS^{ab}=0$ by step 1.1, so $S$ is horizontal in both slots. This proves (a). [F2, step 1.1]

2.2 Frame components (c). In an adapted inertial orthonormal frame with $n=e_0$ one has $n^a=\delta^a_0$ and $n_a=-\delta_a^0$; hence $h^0{}_0=0$, $h^0{}_j=h^i{}_0=0$ and $h^i{}_j=\delta^i_j$ for $i,j=1,2,3$. Substituting into the definitions gives $\varepsilon=T^{00}$; $\pi^a=-c^{-1}h^a{}_bT^{bc}n_c=c^{-1}h^a{}_bT^{b0}$, so $\pi^0=0$ and $\pi^i=T^{i0}/c=T^{0i}/c$; and $S^{ab}=h^a{}_ch^b{}_dT^{cd}$ gives $S^{0a}=S^{a0}=0$ and $S^{ij}=T^{ij}$. [step 1.1, given]

3.1 Contraction and uniqueness (b). Contracting the expansion of step 2.1 with $n_b$ and using step 1.1, $T^{ab}n_b=\varepsilon\,n^a(n_bn^b)+c\,(n^a\pi^bn_b+\pi^a\,n_bn^b)+S^{ab}n_b=-\varepsilon n^a-c\pi^a$. If $T^{ab}=\varepsilon'n^an^b+c(n^a\pi'^b+\pi'^an^b)+S'^{ab}$ is another decomposition with $\pi'\in n^\perp$ and $S'$ symmetric horizontal, then contracting with $n_an_b$ gives $\varepsilon'=T^{ab}n_an_b=\varepsilon$, contracting with $n_b$ and comparing with the identity just proved gives $-c\pi'^a=-\varepsilon n^a-\varepsilon'(-n^a)-c\pi^a=-c\pi^a$, hence $\pi'=\pi$ as $c>0$; then $S'=T-\varepsilon n\otimes n-c(n\otimes\pi+\pi\otimes n)=S$. [step 1.1, step 2.1, given]

4.1 Clauses (a), (b) and (c) are proved in steps 2.1, 3.1 and 2.2. The isotropic rest stress $S^{ab}=ph^{ab}$ is a definition, with $p=0$ exactly when $S=0$; the identities hold at every point of $\Omega$ and use only that $T$ is a continuous symmetric $(2,0)$ field, while the physical reading of $\varepsilon$, $\pi$ and $S$ as measured energy density, momentum density and stress is a separate model premise not asserted here. No choice principle is used. [step 2.1, step 2.2, step 3.1] ∎
