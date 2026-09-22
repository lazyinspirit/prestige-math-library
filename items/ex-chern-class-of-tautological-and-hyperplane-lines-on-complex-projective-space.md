---
id: ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space
kind: example
title: Chern class of tautological and hyperplane lines on complex projective space
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["prop-first-chern-class-of-tensor-dual-and-conjugate-lines", "lem-integral-cohomology-ring-of-complex-projective-space-by-splitting", "def-chern-classes-from-the-projective-bundle-relation", "thm-thom-isomorphism-for-oriented-vector-bundles", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "def-thom-class-by-fiberwise-normalization", "def-fundamental-class-of-a-compact-oriented-manifold", "thm-excision-for-singular-cohomology", "cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms", "def-kronecker-evaluation-pairing", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Fiber-normalized Thom class and zero-section Euler class, printed p.88"
verification:
  audited: 2026-09-22
---

## Example

Assume AC. Let $\gamma\to\mathbb{CP}^n$ be the tautological complex line, let $\gamma^*$ be its dual (the hyperplane line), and let $n\ge1$. Put $x=c_1(\gamma^*)$. Then $x$ generates $H^2(\mathbb{CP}^n;\mathbb Z)$ and
$$c_1(\gamma)=-x,\qquad c(\gamma^*)=1+x.$$
Here **positive generator** means that the restriction to the standard $\mathbb{CP}^1$ evaluates to $+1$ on its fundamental class in the complex orientation. With this convention $x$ is positive and the tautological class is negative. The coordinate $w=z_1/z_0$ on $\mathbb{CP}^1$ is oriented by $(\operatorname{Re}w,\operatorname{Im}w)$.

## Facts & Assumptions

**Given:** AC, $n\ge1$, and these bundles, with integral cohomology throughout.

[A1] AC is assumed through the projective cohomology, Chern and Thom constructions ([[def-axiom-of-choice]]).

[F1] For complex lines on the present CW bases, $c_1(L^*)=-c_1(L)$ ([[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]).

[F2] The tautological Euler class $t=e(\gamma_{\mathbb R})$ generates $H^2(\mathbb{CP}^n;\mathbb Z)$ for $n\ge1$, and standard projective inclusions preserve $t$ ([[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]).

[F3] For a complex line, $c_1(L)=e(L_{\mathbb R})$ in the complex orientation, $c_0(L)=1$, and $c_i(L)=0$ for $i>1$ ([[def-chern-classes-from-the-projective-bundle-relation]]).

[F4] Every integrally oriented numerable bundle over a CW complex has a unique normalized Thom class and the associated Thom isomorphism ([[thm-thom-isomorphism-for-oriented-vector-bundles]]). Fiberwise normalization fixes its restriction to each disk pair as the chosen positive orientation class, and the Euler class is the zero-section pullback of its relative-to-absolute image ([[def-thom-class-by-fiberwise-normalization]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F5] Integral singular cohomology has natural pair exact sequences and homotopy invariance; excision removes a subset whose closure lies in the interior of the relative subspace ([[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]], [[thm-excision-for-singular-cohomology]]).

[F6] The fundamental class of a compact oriented manifold restricts to its specified local orientation at each point ([[def-fundamental-class-of-a-compact-oriented-manifold]]). Evaluation is evaluation of cocycles on cycles ([[def-kronecker-evaluation-pairing]]).

## Verification

**Proof technique:** direct.

1.1 By [F3], $c_1(\gamma)=t$, and by [F1], $x=-t$. Since [F2] supplies a generator, rather than merely a nonzero class, $x$ is a generator as well. Restriction carries this identity to the standard $\mathbb{CP}^1$. It remains to check the asserted sign on that complex-oriented sphere. [F1, F2, F3]

1.2 Write $M=\mathbb{CP}^1$ and $L=\gamma^*|_M$. The linear functional $(z_0,z_1)\mapsto z_1$ restricts on each line to a section $s$ of $L$. This section is continuous in bundle charts and vanishes precisely at $p=[1:0]$. On the affine chart $w=z_1/z_0$, the tautological frame is $(1,w)$; its dual frame expresses $s$ as the scalar $w$. Both this base coordinate and the dual fiber coordinate have their complex orientations. [given, algebra]

2.1 Let $E$ be the total space of $L$ and $E^\times$ the complement of its zero section. Since $L_{\mathbb R}$ is an integrally oriented numerable rank-two bundle over the CW complex $M$, [F4] supplies its unique normalized class $u_L\in H^2(D(L),S(L);\mathbb Z)$. Inclusion $(D(L),S(L))\to(E,E^\times)$ induces an isomorphism by the pair sequences, since $D(L)\to E$ and $S(L)\to E^\times$ are homotopy equivalences by radial contraction and radial normalization; let $U\in H^2(E,E^\times;\mathbb Z)$ be the unique class restricting to $u_L$. The section gives $v=s^*U\in H^2(M,M\setminus\{p\};\mathbb Z)$. Its absolute image is $e(L_{\mathbb R})=c_1(L)$, because the section $s$ and the zero section are homotopic by fiberwise multiplication by a parameter in $[0,1]$, and relative-to-absolute maps commute with pullback. [F3, F4, F5, step 1.2]

3.1 Choose a coordinate disk $V$ about $p$, centered at $w=0$. Excision identifies $H^2(M,M\setminus\{p\};\mathbb Z)$ with $H^2(V,V\setminus\{0\};\mathbb Z)$: remove $M\setminus V$, a closed subset of the open relative subspace. In the trivialization $E|_V=V\times\mathbb C$, the Thom class is the pullback of the positive generator of $H^2(\mathbb C,\mathbb C\setminus\{0\};\mathbb Z)$ by the fiber projection. Indeed contraction of $V$ to its center gives an equivalence of pairs with the central fiber, where [F4] fixes that generator. The section is $w\mapsto(w,w)$, so its pullback is the positive local orientation cohomology class: the composite with the fiber projection is the identity coordinate $w\mapsto w$. Thus the local class $v$ evaluates to $+1$ on the complex-oriented local homology generator. [F4, F5, step 1.2, step 2.1]

4.1 The fundamental class $[M]$ maps to that positive local generator by [F6]. Evaluation therefore gives $\langle c_1(L),[M]\rangle=1$: the absolute image of $v$ is $c_1(L)$ by step 2.1, and evaluation commutes with the relative quotient on chains. Explicitly, a relative cocycle is a cochain vanishing on chains in $M\setminus\{p\}$, so evaluating its absolute image on a cycle equals evaluating the relative cocycle on that cycle's relative image. This also shows that excision and restriction preserve this pairing. Hence $x$ is positive in the stated convention, and $c_1(\gamma)=-x$ is negative. [F6, step 1.1, step 2.1, step 3.1]

5.1 Since $\gamma^*$ is a line, [F3] gives $c(\gamma^*)=1+c_1(\gamma^*)=1+x$. For $n=1$ the restriction used above is the identity. The empty base does not occur; $n=0$ is excluded from the generator claim because $H^2(\mathbb{CP}^0;\mathbb Z)=0$. All bundles used are over finite CW complexes and their complex orientations supply the integral Thom normalization. AC is inherited as stated in [A1]. [A1, F3, step 4.1] ∎

## Source notes

Hatcher, *Vector Bundles & K-Theory*, §3.2, printed p.88, defines the Euler class by restriction of a fiber-normalized Thom class to the zero section. The local section and relative-cohomology argument above supplies the sign comparison explicitly. Thus the hyperplane class evaluates to $+1$ in the complex orientation; the tautological class evaluates to $-1$. A sphere orientation chosen instead to make the tautological Hopf class positive is the opposite orientation, not a different formula for $c_1$.
