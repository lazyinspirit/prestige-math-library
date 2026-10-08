---
id: ex-half-plane-bergman-kernel-by-mobius-transport
kind: example
title: The upper half-plane Bergman kernel by biholomorphic transport
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 6
proof_strategy: direct
deps:
  - def-biholomorphic-map-several-complex-variables
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-countable-choice
  - def-mobius-transformation
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-complex-conjugation-and-modulus-laws
  - thm-bergman-kernel-biholomorphic-transformation
  - thm-complex-numbers-form-a-field
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-model-domain-bergman-and-szego-kernels
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Zbigniew Błocki, The Bergman Kernel and Metric (lecture notes)
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed pp. 2–3: the biholomorphic transformation law (1.2) used
        to transport the disc kernel along the Möbius map. The source states
        the law for a biholomorphism; the Cayley map's domain and inverse are
        verified locally in the proof below from the explicit formulas.
---

## Example

Let $\mathbb H=\{z\in\mathbb C:\operatorname{Im}z>0\}$ and let
$\varphi:\mathbb H\to\mathbb D$, $\varphi(z)=\frac{z-i}{z+i}$, be the Möbius
biholomorphism. Then

$$K_{\mathbb H}(z,w)=\frac{-1}{\pi(z-\overline w)^2},$$

and in particular $K_{\mathbb H}(z,z)=\frac{1}{4\pi(\operatorname{Im}z)^2}$;
the reproducing property and the diagonal positivity are transported from the
disc.

## Facts & Assumptions

[A1] The only choice assumption is $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through the Bergman Hilbert/kernel and transformation suppliers; no full Axiom of Choice is used.

[F1] For complex $a,b,c,d$ with $ad-bc\ne0$, the associated Möbius transformation $z\mapsto\frac{az+b}{cz+d}$ is defined on the finite plane away from its pole and is a biholomorphism of the Riemann sphere whose inverse is again a Möbius transformation ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]]).

[F2] The unit disc and the upper half-plane are $\mathbb D=\{|z|<1\}$ and $\mathbb H=\{\operatorname{Im}z>0\}$ ([[def-unit-disc-upper-half-plane-and-blaschke-factor]]).

[F3] For $z=x+iy$ one has $|z\pm i|^2=|z|^2+1\pm2\operatorname{Im}z$, because $|z|^2=z\overline z$ and $\operatorname{Im}z=\frac{z-\overline z}{2i}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-complex-numbers-form-a-field]], [[lem-complex-conjugation-and-modulus-laws]]).

[F4] A biholomorphism $F:\Omega\to\Omega'$ of domains satisfies $K_\Omega(z,w)=J_F(z)K_{\Omega'}(F(z),F(w))\overline{J_F(w)}$ with $J_F=\det_{\mathbb C}DF\ne0$, and pullback along $F$ is a unitary isomorphism of the Bergman spaces ([[thm-bergman-kernel-biholomorphic-transformation]]).

[F5] The disc Bergman kernel is $K_{\mathbb D}(\zeta,\eta)=\frac{1}{\pi(1-\zeta\overline\eta)^2}$, it reproduces the corresponding $A^2$ space, and it is the unique such kernel ([[thm-model-domain-bergman-and-szego-kernels]]).

[F6] A biholomorphism is a bijective holomorphic map whose inverse is holomorphic ([[def-biholomorphic-map-several-complex-variables]]).

## Verification

**Proof technique:** direct, transporting the disc kernel along an explicit Möbius map.

**Given:** $\mathrm{AC}_\omega$, the unit disc $\mathbb D$, the upper half-plane $\mathbb H$, and $\varphi(z)=\frac{z-i}{z+i}$.

1.1 The map $\varphi$ has the Möbius form $\frac{1z-i}{1z+i}$ with $ad-bc=1\cdot i-(-i)\cdot1=2i\ne0$, so by [F1] it is holomorphic away from its pole $z=-i$ and is a bijection of the sphere with Möbius inverse. Its inverse is $\psi(u)=\frac{i(1+u)}{1-u}$: indeed $\psi(u)+i=\frac{2i}{1-u}$ and $\psi(u)-i=\frac{2iu}{1-u}$, so $\varphi(\psi(u))=u$, and $1+\varphi(z)=\frac{2z}{z+i}$, $1-\varphi(z)=\frac{2i}{z+i}$ give $\psi(\varphi(z))=z$. [A1, F1, F3, given, algebra]

2.1 For $z\ne-i$, [F3] gives $|\varphi(z)|<1\iff|z-i|^2<|z+i|^2\iff-2\operatorname{Im}z<2\operatorname{Im}z\iff\operatorname{Im}z>0$; thus $\varphi(\mathbb H)\subseteq\mathbb D$. Likewise, for $|u|<1$ the real part $(1-|u|^2)/|1-u|^2$ of $\frac{1+u}{1-u}$ is positive, so $\operatorname{Im}\psi(u)=\frac{1-|u|^2}{|1-u|^2}>0$ and $\psi(\mathbb D)\subseteq\mathbb H$. Since the two maps are inverse bijections by step 1.1 and both are holomorphic on these domains, [F6] makes $\varphi:\mathbb H\to\mathbb D$ a biholomorphism with $J_\varphi(z)=\varphi'(z)=\frac{2i}{(z+i)^2}$. [F1, F2, F3, F6, step 1.1]

3.1 By [F4] applied to $\varphi$, $K_{\mathbb H}(z,w)=K_{\mathbb D}(\varphi(z),\varphi(w))\varphi'(z)\overline{\varphi'(w)}$. By [F5] and [F3], $$1-\varphi(z)\overline{\varphi(w)}=1-\frac{(z-i)(\overline w+i)}{(z+i)(\overline w-i)}=\frac{(z+i)(\overline w-i)-(z-i)(\overline w+i)}{(z+i)(\overline w-i)}=\frac{-2i(z-\overline w)}{(z+i)(\overline w-i)}.$$ Substituting this and $\varphi'(z)=\frac{2i}{(z+i)^2}$, $\overline{\varphi'(w)}=\frac{-2i}{(\overline w-i)^2}$ into the transformation law gives $$K_{\mathbb H}(z,w)=\frac{(z+i)^2(\overline w-i)^2}{\pi\bigl(-2i(z-\overline w)\bigr)^2}\cdot\frac{2i}{(z+i)^2}\cdot\frac{-2i}{(\overline w-i)^2}=\frac{-1}{\pi(z-\overline w)^2},$$ since $(2i)(-2i)=4$ and $(-2i)^2=-4$. [F3, F4, F5, step 2.1, algebra]

4.1 Setting $w=z$ in step 3.1 and using $z-\overline z=2i\operatorname{Im}z$ gives $(z-\overline z)^2=-4(\operatorname{Im}z)^2$, hence $K_{\mathbb H}(z,z)=\frac{1}{4\pi(\operatorname{Im}z)^2}>0$ for $z\in\mathbb H$. This is transport of the disc's diagonal: $K_{\mathbb H}(z,z)=|\varphi'(z)|^2K_{\mathbb D}(\varphi(z),\varphi(z))$ by [F4], and by [F4] the pullback along the biholomorphism $\varphi$ carries the disc reproducing property to the reproducing property of $K_{\mathbb H}$ on $A^2(\mathbb H)$. [F4, F5, step 3.1] ∎
