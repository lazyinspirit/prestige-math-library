---
id: ex-the-mobius-band-presented-by-two-regular-patches
kind: example
title: "The Mobius band presented by two regular patches, with normal comparison on the interiors of the overlap components"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-admissible-regular-parametrized-surface-patch, def-finitely-patched-regular-surface-and-integrals, def-cross-product-in-r3, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-riemann-integral-over-a-jordan-set, thm-jordan-boundary-criterion, def-euclidean-inner-product, thm-sine-cosine-signs-monotonicity-and-ranges]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237 notes, Section 5.3"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Example

Let
$$\Psi(t,s)=((1+s\cos(t/2))\cos t,\ (1+s\cos(t/2))\sin t,\ s\sin(t/2))$$
for $(t,s)\in\mathbb R\times[-1/2,1/2]$. Set
$$R_1=[-\pi/6,7\pi/6]\times[-1/2,1/2],\qquad R_2=[5\pi/6,13\pi/6]\times[-1/2,1/2],$$
and let $\Psi_1,\Psi_2$ be the restrictions of $\Psi$ to $R_1$ and $R_2$. These two regular patches cover the Möbius band. At overlap points represented by interior parameter points of both patches, their induced normals agree on the component with the same angle values and are opposite on the component created by the $2\pi$ shift.

## Facts & Assumptions

**Given:** The map $\Psi$ above, the two parameter rectangles $R_1$ and $R_2$, and their restrictions $\Psi_1,\Psi_2$.

[F1] A regular patch has no interior parameter point sharing its image with a distinct point of the parameter region ([[def-admissible-regular-parametrized-surface-patch]]).

[F2] In a compatible finite patch presentation, the preimage of each pairwise overlap has content zero in both parameter regions, and induced normals agree at every overlap point coming from interior parameter points of both patches ([[def-finitely-patched-regular-surface-and-integrals]]).

[F3] The cross product is that of [[def-cross-product-in-r3]].

[L1] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L2] $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] $\sin(t+\pi)=-\sin t$ and $\cos(t+\pi)=-\cos t$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[F4] A parametrization induces its unit normal on the image of its interior ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F5] Integration over a Jordan set is that of its zero extension ([[def-riemann-integral-over-a-jordan-set]]).

[L4] A bounded set is Jordan measurable exactly when its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[F6] $\langle x,y\rangle=\sum_{k<n}x_ky_k$ ([[def-euclidean-inner-product]]).

[L5] Sine and cosine take values in $[-1,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

## Verification

**Proof technique:** direct.

1.1 Writing $c=\cos(t/2)$ and $q=\sin(t/2)$, the identities in [L1], [L2], and [L3] give $\Psi(t+2\pi,s)=\Psi(t,-s)$ for every $(t,s)$, because $\cos((t+2\pi)/2)=-c$ and $\sin((t+2\pi)/2)=-q$ while $\cos(t+2\pi)=\cos t$ and $\sin(t+2\pi)=\sin t$. [L1, L2, L3, given]

2.1 The two rectangles $R_1$ and $R_2$ each have angle length $4\pi/3<2\pi$, their union covers a full turn modulo $2\pi$, they overlap directly on $K_1=[5\pi/6,7\pi/6]\times[-1/2,1/2]$, and after the shift in step 1.1 they overlap again through $K_2=[-\pi/6,\pi/6]\times[-1/2,1/2]$ on $R_1$ against $[11\pi/6,13\pi/6]\times[-1/2,1/2]$ on $R_2$. [step 1.1, given]

3.1 Differentiating and using [F3] and [L1] gives $\Psi_t\times\Psi_s=(1+s\cos(t/2))(\sin(t/2)\cos t,\ \sin(t/2)\sin t,\ -\cos(t/2))+\frac{s}{2}(-\sin t,\cos t,0)$, so $\|\Psi_t\times\Psi_s\|^2=(1+s\cos(t/2))^2+s^2/4$. Since $|s|\le1/2$ and $|\cos(t/2)|\le1$ by [L5], one has $1+s\cos(t/2)\ge1/2$, so this norm squared is positive. For injectivity on either rectangle, equality of two images first gives the same polar angle $t$ modulo $2\pi$ because the radial coordinate is positive; the angle interval has length below $2\pi$, so the parameters have the same $t$. The radial coordinate together with the third coordinate $s\sin(t/2)$ then recovers $s$, because $\cos^2(t/2)+\sin^2(t/2)=1$. Thus no interior parameter point shares its image with another point of the same rectangle, and both restrictions are regular. [step 2.1, F1, F3, L1, L2, L5]

4.1 The points of the first overlap that come from the interiors of both parameter regions have common parameters in $K_1^\circ=(5\pi/6,7\pi/6)\times(-1/2,1/2)$. On this open rectangle the restrictions are literally the same map with the same derivatives, so their oriented area vectors and induced normals agree by [F4]. At $(t,s)=(\pi,0)$, step 3.1 gives $\Psi_t\times\Psi_s=(-1,0,0)$, so the common induced normal there is $-e_x$. No normal is asserted at an overlap point represented only by a boundary parameter, because [F4] defines the induced normal on the image of the parameter-region interior. [step 3.1, F2, F4, F6]

4.2 The points of the second overlap that come from both interiors are represented on $R_1$ by $K_2^\circ=(-\pi/6,\pi/6)\times(-1/2,1/2)$ and on $R_2$ by $h(K_2^\circ)$, where $h(t,s)=(t+2\pi,-s)$. Step 1.1 gives $\Psi_2\circ h=\Psi_1$ there. Substituting $(t+2\pi,-s)$ into the explicit formula of step 3.1 changes the sign of every term in $\Psi_t\times\Psi_s$, because $\sin((t+2\pi)/2)=-\sin(t/2)$, $\cos((t+2\pi)/2)=-\cos(t/2)$, $\sin(t+2\pi)=\sin t$, and $\cos(t+2\pi)=\cos t$. Thus the oriented area vectors, and hence the induced normals from [F4], are opposite at every such interior-overlap point. At $(t,s)=(0,0)$ on $R_1$, step 3.1 gives $\Psi_t\times\Psi_s=(0,0,-1)$, while the corresponding point $(2\pi,0)$ on $R_2$ gives $(0,0,1)$. [step 1.1, step 3.1, F4, L3]

5.1 Steps 4.1 and 4.2 exhibit, on the points where both induced normals are defined, one overlap component with matching normals and one with opposite normals. Thus this two-patch presentation carries both sign patterns at once. [step 4.1, step 4.2, F4, F6]

6.1 Each overlap preimage is a closed rectangle of positive area, so the content-zero overlap condition in [F2] also fails. The example is therefore a two-patch presentation of the Möbius band, but not a compatible finite patch presentation for flux. [step 4.1, step 4.2, F2, F5, L4] ∎

## Remarks

- The point of the example is local to this presentation. It does not claim that no other presentation of the Möbius band could behave differently; the next false statement is the finite check on this one.
