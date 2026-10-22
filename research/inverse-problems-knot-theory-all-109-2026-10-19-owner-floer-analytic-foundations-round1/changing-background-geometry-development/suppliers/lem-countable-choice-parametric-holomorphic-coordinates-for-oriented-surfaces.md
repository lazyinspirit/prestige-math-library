---
id: lem-countable-choice-parametric-holomorphic-coordinates-for-oriented-surfaces
kind: lemma
title: "Parametric holomorphic surface coordinates under Countable Choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-plancherel, thm-mihlin-fourier-multiplier-theorem, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, lem-countable-choice-planar-morrey-estimate, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ahlfors, Lectures on Quasiconformal Mappings"
      url: "https://bookstore.ams.org/ulect-38"
      locator: "Beltrami-coordinate construction; the actual small-patch operator inversion and parametric smoothness are proved locally below"
---

## Statement

Assume Countable Choice. Let $\Sigma$ be a compact oriented smooth surface and let $j_s$, $0\le s\le1$, be a smooth family of orientation-compatible almost complex structures: $j_s^2=-I$ and $(v,j_sv)$ has positive orientation for every nonzero tangent vector $v$. No integrability hypothesis is imposed.

There is a finite cover of $[0,1]\times\Sigma$ by local maps of the form
$$(s,x)\longmapsto(s,z_s(x))$$
which are smooth diffeomorphisms onto their images and for which every $z_s$ is a complex coordinate for $j_s$. In particular each $j_s$ is integrable and its complex coordinate transitions vary smoothly with the parameter. Near a chosen center a coordinate may be normalized to have value zero and prescribed positive complex-linear derivative obtained by smoothly identifying $j_s$ at that center with $i$.

On a region where the structures and a holomorphic chart are already fixed, those given charts may be included unchanged. This is an actual parametric local coordinate theorem, not an appeal to dimension-two integrability or to a full-choice measurable Riemann mapping theorem.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact surface and actual smooth family of orientation-compatible almost complex structures.

[F1] Plancherel and the Mihlin multiplier theorem hold with Countable Choice, as do compactly supported smooth approximation in integer Sobolev spaces. ([[thm-plancherel]], [[thm-mihlin-fourier-multiplier-theorem]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F2] Bounded difference quotients give actual weak derivatives, and the planar $W^{1,p}$ Morrey estimate for $p>2$ gives bounded continuous representatives with explicit local bounds, all under Countable Choice. ([[lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative]], [[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]], [[lem-countable-choice-planar-morrey-estimate]])

[F3] The actual Euclidean local inverse and higher inverse regularity theorems apply to smooth maps with invertible derivative. ([[thm-euclidean-inverse-function-theorem]], [[thm-higher-regularity-of-local-inverses]])

## Proof

1.1 Work in a positive real surface chart centered at one point. Smoothly change its linear coordinates with $s$ so $j_s(0)=i$: use the positive basis $(e,j_s(0)e)$ for one fixed nonzero real vector $e$. These matrices are smooth and invertible on a small closed parameter interval. In these coordinates write $j_s=\begin{pmatrix}a&b\\c&-a\end{pmatrix}$, where $a^2+bc=-1$ and $c>0$ near the center. A complex-valued coordinate differential is complex-linear for $j_s$ exactly when its coefficients are proportional to $dx+\tau dy$, with $\tau=(i-a)/c$ in the upper halfplane. Equivalently it solves $f_{\bar z}=\mu_s f_z$ for $$\mu_s=\frac{1+i\tau}{1-i\tau},\qquad |\mu_s|<1.$$ At the center $\mu_s(0)=0$ for every parameter. Rescale the real chart by $x=rz$ and multiply $\mu_s(rz)$ by one fixed smooth cutoff supported in $|z|<2$ and equal to one on $|z|\le1$. Call this smooth compact coefficient $\nu_s$. Uniform spatial Taylor estimates give $\|\nu_s\|_{C^k}=O_k(r)$ for every fixed $k$, including every fixed number of parameter derivatives, on the chosen closed parameter interval. Thus its $C^1$ and $W^{1,4}$ norms can be made uniformly small by ONE radius. [given, construct, algebra]

1.2 Construct the actual operators used to solve this equation. Set $K(z)=1/(\pi z)$, locally integrable, and $Th=K*h$ for compactly supported $L^4$ functions. Direct polar integration against a smooth compact test gives $\partial_{\bar z}K=\delta_0$: the radial derivative contributes its center value and the angular derivative integrates to zero. For smooth compact $h$, derivatives $\partial_xTh,\partial_yTh$ are in $L^2$: write them as $K*\partial_jh$, subtract the zero integral of $\partial_jh$ at infinity to obtain $O(|z|^{-2})$, and use local boundedness of the convolution. Fourier differentiation and [F1] therefore identify $\partial_zTh$ with the multiplier $$S:\widehat{Sh}(\xi)=\frac{i\xi_x+\xi_y}{i\xi_x-\xi_y}\widehat h(\xi)\quad(\xi\ne0).$$ The origin is a null set in this $L^2$ identity, so no unsupported point-mass term is inserted. Its smooth homogeneous degree-zero symbol has bounded derivatives on the unit circle, so [F1] gives a bounded $L^4$ extension $S$ and $\|S\|_{4\to4}=C_S<\infty$. It commutes with weak derivatives wherever those are in $L^4$, first for smooth approximations and then by their distributional limits. Approximation by [F1] also gives $\partial_{\bar z}Th=h$ and $\partial_zTh=Sh$ for compact $L^4$ data: Holder bounds the translated kernel in $L^{4/3}$ on bounded sets and gives uniform convergence of the convolutions there, while the multiplier derivatives converge in $L^4$. For data supported in $|z|\le2$, these same Holder bounds on $|z|\le4$ and $|Th(z)|\le C\|h\|_4/|z|$ outside show $\|Th\|_4\le C\|h\|_4$. Thus $T$ and its first weak derivatives have the asserted actual bounds. [F1, construct, algebra]

2.1 Choose $r$ in step1.1 so $\|\nu_s\|_\infty C_S\le1/2$. On $L^4(\mathbb R^2)$ the explicit Neumann series gives $$h_s=(I-M_{\nu_s}S)^{-1}\nu_s=\sum_{n\ge0}(M_{\nu_s}S)^n\nu_s.$$ It converges in norm with $\|h_s\|_4\le2\|\nu_s\|_4$, and its equation says $h_s=\nu_s(1+Sh_s)$, so $h_s$ has the same compact support. It has ALL integer weak derivatives. For the first, translation and subtraction of that equation give $$\delta_t h_s=(I-M_{\nu_s(\cdot+t)}S)^{-1}\big((\delta_t\nu_s)(1+Sh_s)\big)$$ in each real coordinate direction. Its $L^4$ norm is bounded uniformly as $t\to0$ by the $L^4$ and $L^\infty$ first derivatives of $\nu_s$ and the previous bound for $h_s$. [F2] supplies the weak derivative. Repeating this argument on the differentiated equations gives, for a multiindex $\alpha$, $$\partial^\alpha h_s=(I-M_{\nu_s}S)^{-1}\left(\partial^\alpha\nu_s+\sum_{0<\beta\le\alpha}\binom\alpha\beta(\partial^\beta\nu_s)S\partial^{\alpha-\beta}h_s\right).$$ Every term on the right is in $L^4$ by the already proved lower derivatives; weak difference quotients justify the induction before writing this identity. In particular $\|h_s\|_{W^{1,4}}\le C r$ uniformly, and all fixed higher norms are bounded. This is a specified convergent construction, not a choice of weak solutions. [F1, F2, step 1.1, step 1.2, construct, algebra]

3.1 Put $f_s(z)=z+Th_s(z)$. Then $\partial_{\bar z}f_s=h_s=\nu_s(1+Sh_s)=\nu_s\partial_zf_s$. Step2.1 and boundedness of $S$ on $W^{1,4}$ give $\|Sh_s\|_{W^{1,4}}+\|h_s\|_{W^{1,4}}\le Cr$. Applying [F2] to these two functions on finitely many unit disks covering $|z|\le2$ gives $\|df_s-I\|_\infty\le Cr$ there. Take $Cr<1/2$. Integration along segments in the convex unit disk yields $|f_s(z)-f_s(w)|\ge|z-w|/2$, so $f_s$ is injective there and its derivative is invertible. Its orientation is positive, since its real Jacobian is $|\partial_zf_s|^2(1-|\nu_s|^2)>0$. Higher Sobolev bounds in step2.1, the derivative formulas of step1.2 and [F2] make $f_s$ smooth. [F3] supplies its smooth inverse on its image. On $|z|<1$ the cutoff coefficient is the original rescaled $\mu_s$, so step1.1 identifies $f_s$ as an actual $j_s$-holomorphic local coordinate on the original surface. Subtracting $f_s(0)$ and dividing by the nonzero $\partial_z f_s(0)$ gives value zero and identity complex derivative in the normalized center frame, if desired. [F2, F3, step 1.1, step 1.2, step 2.1, construct, algebra]

4.1 The construction is smooth jointly with the parameter. On $L^4$, the resolvent identity for $(I-M_{\nu_s}S)^{-1}$ proves continuity, and difference quotients of the norm-convergent equation give $$\partial_s h_s=(I-M_{\nu_s}S)^{-1}\big((\partial_s\nu_s)(1+Sh_s)\big).$$ Taylor remainders in the finite smooth coefficient family and the uniform inverse bound verify this derivative in norm. Iterating proves every parameter derivative in $L^4$, with continuity. Applying the spatial differentiated equations in step2.1 to these parameter derivatives gives every mixed derivative in $W^{k,4}$ with continuous bounds: their highest unknown is always multiplied by the same invertible $I-M_{\nu_s}S$, and all other terms involve already known lower derivatives and bounded coefficient derivatives. The Morrey estimate then identifies smooth joint representatives of every derivative of $f_s$, and [F3] gives a smooth joint inverse for $(s,z)\mapsto(s,f_s(z))$. The finite coordinate normalization at the center is smooth too. No selection of parameter-dependent inverse branches is hidden: the inverse is unique on the already injective unit disk, and all operators used the displayed series. [F1, F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 Apply the construction at every point of $[0,1]\times\Sigma$ and retain a finite subcover by compactness; finite choices suffice. Overlaps of the resulting fiber coordinates have complex-linear derivative because both identify the same $j_s$ with $i$. They are smooth and therefore complex differentiable, so are actual holomorphic transition maps. This gives the required integrable atlas and its smooth parameter dependence. If a region already has fixed complex charts, retain them there and add the constructed charts on the rest; the same overlap argument applies, so no matching of separately chosen Beltrami solutions on an overlap is required. All analytic limits were prescribed Neumann sums, mollifier limits, or weak-derivative procedures with the stated Countable Choice suppliers. This proves parametric holomorphic coordinates without assuming an unproved surface integrability theorem. [F1, F2, F3, step 1.1, step 3.1, step 4.1, construct, algebra] ∎
