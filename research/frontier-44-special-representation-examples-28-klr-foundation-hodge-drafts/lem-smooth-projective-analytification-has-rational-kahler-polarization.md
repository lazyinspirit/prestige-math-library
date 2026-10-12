---
id: "lem-smooth-projective-analytification-has-rational-kahler-polarization"
kind: "lemma"
title: "Smooth projective analytifications have rational Kähler forms"
status: "draft"
origin: "session"
deps: ["lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds", "thm-holomorphic-inverse-function-theorem-several-variables", "prop-first-chern-class-of-tensor-dual-and-conjugate-lines", "def-compact-kahler-manifold-and-hodge-polarization-conventions", "thm-jacobian-criterion-smooth-morphism", "thm-holomorphic-implicit-function-theorem", "thm-ample-powers-very-ample-proper-base", "lem-first-chern-form-agrees-with-the-topological-line-class"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}]}
proof_strategy: direct
---

## Statement

A smooth projective complex scheme of pure dimension $n$ has a compact Hausdorff second-countable smooth complex analytification. Algebraic morphisms between smooth complex schemes become holomorphic. Every ample invertible sheaf $A$ on a smooth projective scheme has a smooth positive closed real $(1,1)$ form representing the real image of $c_1(A)\in H^2(X^{an};\mathbb Z)$.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.



## Proof

1.1 At each closed point the relative Jacobian supplier for $X\to\operatorname{Spec}\mathbb C$ supplies a standard smooth localized presentation $\mathbb C[t_1,\ldots,t_m]/(f_1,\ldots,f_r)$ with an invertible $r\times r$ Jacobian minor. On complex points the localized denominators are nonzero on Euclidean open neighborhoods. The holomorphic implicit function theorem expresses the zero set of these very defining equations as a holomorphic graph in $m-r=n$ free coordinates. If $r=0$ it is already an open coordinate set; if $n=0$ it is locally a point. Ring isomorphisms between overlapping standard smooth charts have coordinate functions represented by polynomials divided by nonzero polynomials, hence holomorphic; their algebraic inverse gives a holomorphic inverse. These charts therefore define the smooth complex analytification and make algebraic morphisms holomorphic by the same local regular-function calculation. [given, algebra, construct]

2.1 Choose a projective closed immersion. Its complex-point image is a closed zero locus of homogeneous polynomials in complex projective space. This space is compact as the continuous quotient of the unit sphere, Hausdorff since $d([u],[v])=\min_{|c|=1}\|u-cv\|$ on unit representatives is a metric on its quotient, and second-countable by finitely many affine complex charts. The local coordinate-ring quotient defining a closed immersion gives a surjection on cotangent spaces and therefore an injection of analytic tangent spaces. The holomorphic constant-rank argument, obtained by adjoining complementary coordinates and applying the inverse function theorem, shows it is a local holomorphic embedding. Thus its subspace topology agrees with the smooth chart topology in step 1.1, and its closed image proves compactness, Hausdorffness and second-countability. [step 1.1, given, algebra]

3.1 For the given ample $A$, the proper-base ample-power supplier gives a closed immersion $j$ with $j^*\mathcal O(1)=A^{\otimes d}$ for a positive integer $d$. The affine formula $\omega_{FS}=i\partial\bar\partial\log(1+|z|^2)/(2\pi)$ glues because chart changes add the logarithm of a nonzero holomorphic modulus squared. It is closed and its Hermitian matrix is positive: its numerator evaluates on $v$ as $(1+|z|^2)|v|^2-|\langle z,v\rangle|^2\ge |v|^2$. Pulling back along the holomorphic immersion gives a positive closed form, and scaling by $1/d$ retains these properties. Define the compatible connection explicitly in each holomorphic frame by $\nabla(fe_i)=(df+f\theta_i)e_i$, $\theta_i=\partial\log\psi_i$. On a frame overlap $e_j=g e_i$, $\psi_j=|g|^2\psi_i$, whence $\theta_j=\theta_i+g^{-1}dg$; the local connections glue. Since $\theta_i+\bar\theta_i=\psi_i^{-1}d\psi_i$, the Leibniz calculation gives $d h(s,t)=h(\nabla s,t)+h(s,\nabla t)$, so it is genuinely metric-compatible in every complex dimension. For the local metric weight $(1+|z|^2)^{-1}$ its curvature is $\partial\bar\partial\log(1+|z|^2)$. The first-Chern comparison identifies $[\omega_{FS}]$ with $c_1(\mathcal O(1))$, and naturality and $c_1(A^{\otimes d})=dc_1(A)$ give $[j^*\omega_{FS}/d]=c_1(A)_{\mathbb R}$; the tensor formula applies on each connected component, which is a paracompact manifold of finite CW homotopy type by the scalar-comparison supplier. This proves the rational Kähler assertion. [step 1.1, step 2.1, given, algebra, construct] ∎
