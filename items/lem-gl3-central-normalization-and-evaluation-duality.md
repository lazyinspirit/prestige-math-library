---
dependency_level: 2
id: lem-gl3-central-normalization-and-evaluation-duality
kind: lemma
title: "Central normalization and the dual evaluation distribution for full-level GL3"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-unitary-cuspidal-generic-gln-representation, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-kernel-and-fibres-of-complex-exponential, lem-rat-embeds-dense]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §2, equations (2.2)–(2.12)"
      url: "https://arxiv.org/pdf/math/0408100v3"
---

## Statement

Let $G=\mathrm{GL}_3(\mathbb R)$, $\Gamma=\mathrm{GL}_3(\mathbb Z)$, and let $W$ be a nonzero irreducible unitary representation with continuous unitary central character $\omega$. Suppose $i:W\hookrightarrow L^2_\omega(\Gamma\backslash G)$ is a continuous equivariant embedding whose image is cuspidal and which maps smooth vectors continuously to smooth functions. Let $V=W'$ be its continuous contragredient, and define $V^{-\infty}:=(W^\infty)'$. Evaluation $\tau(w)=i(w)(1)$ is a $\Gamma$-invariant element of $V^{-\infty}$. The central character satisfies $\omega(-I)=1$, and there is a unique $t\in\mathbb R$ such that $\omega(rI)=r^{it}$ for $r>0$. Put
$$\kappa(g)=|\det g|^{-it/3},\qquad W_0=W\otimes\kappa,\qquad V_0=W_0'=V\otimes\kappa^{-1}.$$
Then $i_0(w)(g):=\kappa(g)i(w)(g)$ is a continuous equivariant cuspidal embedding $W_0\hookrightarrow L^2_1(\Gamma\backslash G)$, with the same smooth-vector continuity. Its evaluation $\tau_0(w)=i_0(w)(1)$ belongs to $(V_0^{-\infty})^\Gamma$ and agrees with $\tau$ on the underlying smooth vector space. This normalization preserves every $O(3)$ type and imposes no spherical or tempered condition.

## Statement references

[Miller and Schmid, §2, equations (2.2)–(2.12)](https://arxiv.org/pdf/math/0408100v3)

## Facts & Assumptions

**Given:** The group, unitary representation, central character and smooth equivariant realization in the statement. The contragredient action is $(\pi_V(g)\ell)(w)=\ell(\pi_W(g^{-1})w)$.

[F1] [[def-unitary-cuspidal-generic-gln-representation]] fixes unitarity and vanishing proper-parabolic constant terms. Twisting here is tensoring the action by the explicitly displayed one-dimensional character.

[F2] [[thm-complex-exponential-addition-and-real-extension]] and [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] give the exponential addition law. [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]] supplies a continuous logarithm near $1$, with $\exp(\operatorname{Log}z)=z$; its imaginary part is the continuous local argument of a unit complex number there. [[thm-kernel-and-fibres-of-complex-exponential]] identifies equal exponential values modulo $2\pi i\mathbb Z$, and [[lem-rat-embeds-dense]] gives rational density in the reals.

## Proof

1.1 The continuous smooth-vector map followed by evaluation at $1$ is a continuous linear functional on $W^\infty$, hence belongs to $(W^\infty)'=V^{-\infty}$. For $\gamma\in\Gamma$, its contragredient action pairs with $w$ as $i(\pi_W(\gamma^{-1})w)(1)=i(w)(\gamma^{-1})=i(w)(1)$ by equivariance and left $\Gamma$ invariance. Thus $\tau$ is $\Gamma$ invariant. [given, algebra]

1.2 Since $-I\in\Gamma$ is central, right translation by $-I$ is the identity on $L^2_\omega(\Gamma\backslash G)$: $g(-I)=(-I)g$, and the latter has the same left coset as $g$. The central-character property therefore gives $\omega(-I)i(w)=i(w)$ in that Hilbert space. Choose $w\ne0$; injectivity makes $i(w)\ne0$, so its norm forces $\omega(-I)=1$. [given, choose, algebra]

1.3 Put $a(s)=\omega(e^sI)$, a continuous homomorphism $\mathbb R\to\{z:|z|=1\}$. On a sufficiently small interval around zero use the continuous argument $b(s)$ with $b(0)=0$ and $|b(s)|<\pi/4$. For $s,u,s+u$ in a smaller such interval, $b(s+u)-b(s)-b(u)$ is a continuous integer multiple of $2\pi$ with modulus below $\pi$, hence zero. This local additive function is linear: fix a nonzero point in the interval, use integer subdivision and rational multiples to obtain rational linearity, then continuity and density of rationals give $b(s)=ts$ there for one real $t$. Subdivision of any real $s$ into sufficiently small equal summands gives $a(s)=e^{its}$ globally. If two real $t$ have this property their difference times every sufficiently small $s$ is an integer multiple of $2\pi$, forcing equality. Therefore $\omega(rI)=r^{it}$ for the unique $t$. [F2, given, choose, algebra]

2.1 The function $\kappa$ is a continuous smooth unitary character. It is one on $\Gamma$, since $|\det\gamma|=1$, and one on every unipotent subgroup. It is also one on $O(3)$. At $rI$, $\kappa(rI)=r^{-it}$; at $-I$ it is one. Hence $W_0$ and its contragredient have trivial central character. Multiplication by $\kappa$ preserves the Hilbert norm modulo the center and has inverse multiplication by $\kappa^{-1}$. On smooth vectors this fixed smooth character preserves the topology, since each differentiated twisted action is a finite linear combination of differentiated original actions. [F1, step 1.2, step 1.3, algebra]

3.1 For $h,g\in G$, $i_0(\pi_{W_0}(h)w)(g)=\kappa(g)\kappa(h)i(\pi_W(h)w)(g)=\kappa(gh)i(w)(gh)=i_0(w)(gh)$. This proves equivariance; continuity and injectivity follow from step 2.1. Left $\Gamma$ invariance is preserved because $\kappa|_\Gamma=1$. Every proper-parabolic constant-term integral is multiplied by the scalar $\kappa(g)$ because $\kappa$ is one on its unipotent radical, so cuspidality is preserved. Finally $\kappa(1)=1$ gives $\tau_0=\tau$ on the underlying smooth space, and step 1.1 for $W_0$ gives $\tau_0\in(V_0^{-\infty})^\Gamma$. Since $\kappa|_{O(3)}=1$, no compact type changes; no additional restriction on $W$ has been used. [F1, step 1.1, step 2.1, algebra] ∎
