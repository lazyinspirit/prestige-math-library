---
id: ex-em-outgoing-dtn-and-pec-zero-mode-boundaries
kind: example
title: "Outgoing DtN coefficient at degree zero and the explicit PEC topology zero mode"
status: published
origin: pipeline
domain: mathematics
deps: [def-axiom-of-choice, lem-em-outgoing-spherical-hankel-dtn-bounds, lem-em-smooth-pec-cavity-spectral-closure, thm-the-curl-of-a-gradient-vanishes, lem-laplace-fundamental-solution-is-harmonic-off-its-pole, thm-algebra-of-derivatives, thm-complex-exponential-is-entire-with-derivative-itself]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-em-outgoing-spherical-hankel-dtn-bounds: mathematical-premise
  lem-em-smooth-pec-cavity-spectral-closure: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  lem-laplace-fundamental-solution-is-harmonic-off-its-pole: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Section 10.47 (spherical Bessel and Hankel functions)"
      url: "https://dlmf.nist.gov/10.47"
      locator: "Section 10.47: the explicit degree-zero spherical Hankel function h_0(z)=-ie^{iz}/z and its logarithmic derivative, used as the contextual reference; the coefficient computation and the shell zero mode are checked locally through the batch suppliers."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), as required by the cavity supplier (and hence its Countable-Choice harmonic supplier). The following are explicit mathematical verifications of clauses of [[lem-em-outgoing-spherical-hankel-dtn-bounds]] and [[lem-em-smooth-pec-cavity-spectral-closure]]; no measurement, physical identification or empirical claim is made.

(i) At degree $l=0$ the outgoing radial function of the spherical Hankel lemma is $h_0(z)=-ie^{iz}/z$, so for $k,R>0$ the Dirichlet-to-Neumann coefficient of [[lem-em-outgoing-spherical-hankel-dtn-bounds]] is

$$t_0=\frac{k\,h_0'(kR)}{h_0(kR)}=ik-\frac1R,$$

whose real part $-1/R$ is negative and whose imaginary part $k$ is positive, exactly as the exact bounds of that lemma require in degree zero.

(ii) Fix $0<a<b$. In the spherical shell $a<|x|<b$, the field $u(x)=\operatorname{grad}|x|^{-1}=-x/|x|^3$ is smooth on the closure, nonzero, normal to both boundary spheres, curl-free and divergence-free: $u=\nabla\Phi$ with $\Phi(x)=|x|^{-1}$ harmonic off the origin, so $\operatorname{curl}u=\operatorname{curl}\nabla\Phi=0$ and $\operatorname{div}u=\Delta\Phi=0$ there. Thus $u$ lies in the PEC class $X$ of the cavity spectral lemma with zero curl, and it has curl eigenvalue zero: eliminating all topology zero modes would incorrectly discard this explicit admissible vector field.

## Facts & Assumptions
**Given:** The Axiom of Choice, $k>0$, $R>0$, the shell $a<|x|<b$ with $0<a<b$, and the functions $h_0(z)=-ie^{iz}/z$ and $\Phi(x)=|x|^{-1}$.

[L1] The degree-zero outgoing radial function is $h_0(z)=-ie^{iz}/z$ and the DtN coefficients of the spherical Hankel lemma satisfy $-(l+1)/R\le\operatorname{Re}t_l\le-1/R$ and $0<\operatorname{Im}t_l\le k$, with $t_l=kh_l'(kR)/h_l(kR)$ ([[lem-em-outgoing-spherical-hankel-dtn-bounds]]).

[L2] The curl of a gradient vanishes on its domain ([[thm-the-curl-of-a-gradient-vanishes]]), and $\Phi(x)=|x|^{-1}$ is smooth and harmonic on $\mathbb R^3\setminus\{0\}$, so $\Delta\Phi=0$ there ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[L3] The complex exponential is entire with derivative itself and the algebra of derivatives holds ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-algebra-of-derivatives]]).

[L4] The graph completion $X$ of [[lem-em-smooth-pec-cavity-spectral-closure]] contains every smooth field on the closure with $\nu\times u=0$, and the curl form there has nonnegative eigenvalues with the topology zero modes retained.



## Verification

**Proof technique:** direct.

1.1 Logarithmic differentiation of $h_0(z)=-ie^{iz}/z$ by [L3] gives $h_0'(z)=-ie^{iz}\cdot i/z+ie^{iz}/z^2=h_0(z)(i-1/z)$; hence $kh_0'(kR)/h_0(kR)=k(i-1/(kR))=ik-1/R$, so $\operatorname{Re}t_0=-1/R<0$ and $\operatorname{Im}t_0=k>0$, consistent with [L1]. [given, L1, L3, algebra]

1.2 Since $\Phi$ is smooth on the shell and $u=\nabla\Phi$, [L2] gives $\operatorname{curl}u=0$ and $\operatorname{div}u=\Delta\Phi=0$ on $a<|x|<b$; on the boundary sphere $|x|=c$ the field is $u=-x/c^3$, a nonzero multiple of the outward normal, so its tangential part vanishes and $u$ is in the PEC class $X$ by [L4]. [given, L2, L4, algebra]

2.1 Because $\operatorname{curl}u=0$ and $u\ne0$, the field $u$ belongs to the kernel of the curl form on $V=\{w\in X:\operatorname{div}w=0\}$: the eigenidentity of [L4] holds with $\lambda=0$, so the zero eigenspace is nontrivial and must be retained; discarding all topology zero modes would delete this admissible vector field. [step 1.2, L4, algebra] ∎



The computation in (i) is the degree-zero instance of the exact DtN bounds; the field in (ii) is the explicit topology zero mode of the spherical shell, and no claim is made about other eigenvalues, about lossy media or about maximal tangential-trace realisations beyond the class $X$ of [[lem-em-smooth-pec-cavity-spectral-closure]].
