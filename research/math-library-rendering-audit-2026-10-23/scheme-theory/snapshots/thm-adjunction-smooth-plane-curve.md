---
id: thm-adjunction-smooth-plane-curve
kind: theorem
title: "Adjunction for smooth plane curves"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-degree-projective-hypersurface
  - def-ideal-sheaf
  - def-invertible-sheaf
  - def-relative-projective-space-standard-charts
  - def-sheaf-tensor-product
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - def-twisting-sheaf-proj
  - lem-projective-hypersurface-affine-pieces
  - lem-projective-hypersurface-cohomology-sequence
  - lem-smooth-closed-immersion-regular-conormal-sequence
  - lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction
  - thm-serre-duality-projective-space-twisting-sheaves
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the duality and projective-space
suppliers. Let $k$ be a field, let $d\ge1$, and let
$F\in k[x_0,x_1,x_2]$ be a homogeneous form of degree $d$ such that the plane
curve $C=V_+(F)\subseteq\mathbf P^2_k$ is smooth of pure dimension one. Then the
canonical bundle of $C$ satisfies
$$\omega_C=\Omega^1_{C/k}\;\cong\;\mathcal O_C(d-3),$$
where $\mathcal O_C(m)$ is the restriction to $C$ of
$\mathcal O_{\mathbf P^2_k}(m)$; consequently every canonical divisor of $C$ is
linearly equivalent to the divisor of a rational section of
$\mathcal O_C(d-3)$.

## Facts & Assumptions

**Given:** a field $k$, an integer $d\ge1$, a homogeneous form $F\in k[x_0,x_1,x_2]$ of degree $d$, the plane curve $C=V_+(F)\subseteq\mathbf P^2_k$ with its closed immersion $i:C\hookrightarrow\mathbf P^2_k$, and the hypothesis that $C$ is smooth of pure dimension one.

[F1] The ideal sheaf $\mathcal I\subseteq\mathcal O_{\mathbf P^2}$ of the hypersurface $C=V_+(F)$ is the image of multiplication by $F$, so that $0\to\mathcal O_{\mathbf P^2}(-d)\xrightarrow{\cdot F}\mathcal O_{\mathbf P^2}\to i_*\mathcal O_C\to0$ is exact and $\mathcal I\cong\mathcal O_{\mathbf P^2}(-d)$ as $\mathcal O_{\mathbf P^2}$-modules; also $C=\operatorname{Proj}\bigl(k[x_0,x_1,x_2]/(F)\bigr)$ and $C\cap D_+(x_i)=\operatorname{Spec}\bigl(k[x_0,x_1,x_2]_{(x_i)}/(F/x_i^d)\bigr)$ ([[lem-projective-hypersurface-cohomology-sequence]], [[lem-projective-hypersurface-affine-pieces]], [[def-ideal-sheaf]], [[def-degree-projective-hypersurface]]).

[F2] For the closed immersion $i:C\hookrightarrow\mathbf P^2_k$, which has pure codimension $c=1$, the conormal sheaf $\mathcal I/\mathcal I^2$ is a locally free $\mathcal O_C$-module of rank one, and the conormal sequence $0\to\mathcal I/\mathcal I^2\to i^*\Omega^1_{\mathbf P^2/k}\to\Omega^1_{C/k}\to0$ is exact with locally free outer terms ([[lem-smooth-closed-immersion-regular-conormal-sequence]]).

[F3] Adjunction for a smooth closed subvariety of projective space: if $X\subseteq\mathbf P^N_k$ is smooth of finite type and pure dimension $n$ with closed immersion $j$ of pure codimension $c=N-n$ and ideal sheaf $\mathcal I$, then with $\mathcal N_{X/\mathbf P^N}=(\mathcal I/\mathcal I^2)^{\vee}$ and $\det\mathcal N=\bigwedge^c\mathcal N$ there is a canonical isomorphism $$\omega_X\cong j^*\omega_{\mathbf P^N}\otimes_{\mathcal O_X}\det\mathcal N_{X/\mathbf P^N}$$ ([[lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction]], [[def-smooth-projective-dualizing-line-bundle-and-trace]]).

[F4] The dualizing bundle of projective space is $\omega_{\mathbf P^n}=\det\Omega^1_{\mathbf P^n/k}\cong\mathcal O_{\mathbf P^n}(-n-1)$; in particular $\omega_{\mathbf P^2}\cong\mathcal O_{\mathbf P^2}(-3)$ ([[def-smooth-projective-dualizing-line-bundle-and-trace]], [[thm-serre-duality-projective-space-twisting-sheaves]]).

[F5] For an integer $m$ the restriction $\mathcal O_C(m)$ is $i^*\mathcal O_{\mathbf P^2}(m)$, the tensor product of invertible sheaves is invertible, the dual of an invertible sheaf is invertible, and for the rank-one module $\mathcal I/\mathcal I^2$ one has $\det(\mathcal I/\mathcal I^2)^{\vee}=(\mathcal I/\mathcal I^2)^{\vee}$ ([[def-sheaf-tensor-product]], [[def-invertible-sheaf]], [[def-twisting-sheaf-proj]]).

[F6] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; identify the conormal sheaf of the plane curve and feed it into adjunction.

1.1 (Set-up.) Since $C=V_+(F)$ has pure dimension one, $F\ne0$: otherwise $C=\mathbf P^2_k$. Thus the hypersurface sequence of [F1] is exact and $\mathcal I\cong\mathcal O_{\mathbf P^2}(-d)$; the smooth curve $C$ has pure codimension one in $\mathbf P^2_k$. [F1, F2, given]

2.1 (The ideal is the twist.) By [F1] the multiplication map $\mathcal O_{\mathbf P^2}(-d)\to\mathcal O_{\mathbf P^2}$ has image $\mathcal I$, so it induces an isomorphism $\mathcal O_{\mathbf P^2}(-d)\xrightarrow{\ \sim\ }\mathcal I$ of $\mathcal O_{\mathbf P^2}$-modules. [F1, step 1.1]

2.2 (Regularity of the immersion.) Since $C$ is smooth of pure dimension one, the closed immersion $i$ is a regular immersion of pure codimension one in the smooth ambient scheme $\mathbf P^2_k$, so [F2] gives that the conormal sheaf $\mathcal I/\mathcal I^2$ is a locally free $\mathcal O_C$-module of rank one and the conormal sequence is exact. [F2, step 1.1]

2.3 (The ambient dualizing bundle.) By [F4] the dualizing bundle of the plane is $\omega_{\mathbf P^2}\cong\mathcal O_{\mathbf P^2}(-3)$, so its restriction to $C$ is $i^*\omega_{\mathbf P^2}\cong i^*\mathcal O_{\mathbf P^2}(-3)=\mathcal O_C(-3)$ by [F5]. [F4, F5, step 1.1]

3.1 (The conormal sheaf.) Tensoring the isomorphism of step 2.1 with the structure sheaf of $C$ along $i$ gives $i^*\mathcal I\cong i^*\mathcal O_{\mathbf P^2}(-d)=\mathcal O_C(-d)$ by [F5]; for the invertible ideal $\mathcal I$ the conormal sheaf is $\mathcal I/\mathcal I^2=\mathcal I\otimes_{\mathcal O_{\mathbf P^2}}\mathcal O_C=i^*\mathcal I$, because locally $\mathcal I=(f)$ and tensoring with $\mathcal O_C$ presents $\mathcal I/f\mathcal I$; hence $\mathcal I/\mathcal I^2\cong\mathcal O_C(-d)$ by step 2.2. [F2, F5, step 2.1, step 2.2, algebra]

4.1 (The determinant of the normal bundle.) The normal bundle is $\mathcal N_{C/\mathbf P^2}=(\mathcal I/\mathcal I^2)^{\vee}$ by [F3], a rank-one invertible $\mathcal O_C$-module by step 3.1 and [F5], and for $c=1$ the determinant is $\det\mathcal N=\mathcal N$; dualizing $\mathcal I/\mathcal I^2\cong\mathcal O_C(-d)$ and using that the dual of $\mathcal O_C(-d)$ is $\mathcal O_C(d)$ for an invertible sheaf gives $\det\mathcal N_{C/\mathbf P^2}\cong\mathcal O_C(d)$. [F3, F5, step 3.1, algebra]

5.1 (Adjunction.) Applying [F3] to the smooth curve $C$ of pure dimension one inside $\mathbf P^2_k$, of codimension $c=1$, gives $\omega_C\cong i^*\omega_{\mathbf P^2}\otimes_{\mathcal O_C}\det\mathcal N_{C/\mathbf P^2}$; substituting step 2.3 and step 4.1 yields $\omega_C\cong\mathcal O_C(-3)\otimes_{\mathcal O_C}\mathcal O_C(d)=\mathcal O_C(d-3)$, which is the displayed bundle isomorphism. [F3, step 2.3, step 4.1, algebra]

6.1 (Canonical divisors.) A canonical divisor of $C$ is the divisor of a nonzero rational differential, that is, of a nonzero rational section of $\omega_C$; under the isomorphism of step 5.1 it is the divisor of a nonzero rational section of $\mathcal O_C(d-3)$, and any two such divisors differ by the divisor of the rational function relating the two sections, hence are linearly equivalent; this proves the consequence. Every use of choice above is inherited from the duality and projective-space suppliers cited in [F1]–[F5] through [F6]. [F1, F6, step 5.1] ∎
