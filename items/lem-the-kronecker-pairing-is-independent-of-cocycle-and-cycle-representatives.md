---
id: lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
kind: lemma
title: The kronecker pairing is independent of cocycle and cycle representatives
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-kronecker-evaluation-pairing, prop-singular-cohomology-is-contravariantly-functorial, prop-singular-chains-and-homology-are-covariantly-functorial, def-singular-cochain-complex-with-coefficients, def-singular-cohomology-with-coefficients, def-singular-chain-complex-and-singular-homology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, evaluation and its naturality, printed pages 191 and 198–201
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

The Kronecker rule $\langle[\varphi],[c]\rangle=\varphi(c)$ is independent of both cocycle and cycle representatives and is additive in both variables. For a continuous $f:X\to Y$, $\alpha\in H^n(Y;G)$ and $z\in H_n(X;\mathbb Z)$, it satisfies
$$\langle f^*\alpha,z\rangle=\langle\alpha,f_*z\rangle.$$
For a coefficient homomorphism $u:G\to G'$, it satisfies $\langle u_*\alpha,z\rangle=u\langle\alpha,z\rangle$. The same representative-independence argument gives the $R$-bilinear pairing for $R$-linear cochains on chains over a commutative ring $R$.

## Facts & Assumptions

[F1] [[def-kronecker-evaluation-pairing]] specifies evaluation on cocycle/cycle representatives.

[F2] [[def-singular-cochain-complex-with-coefficients]] gives $\delta\psi=\psi\partial$, and [[def-singular-cohomology-with-coefficients]] identifies changes of cocycle representative as coboundaries. [[def-singular-chain-complex-and-singular-homology]] identifies changes of cycle representative as boundaries.

[F3] [[prop-singular-cohomology-is-contravariantly-functorial]] gives $f^*[\varphi]=[\varphi f_\#]$ and coefficient postcomposition; [[prop-singular-chains-and-homology-are-covariantly-functorial]] gives $f_*[c]=[f_\#c]$.

## Proof

**Given:** A cocycle $\varphi$ and cycle $c$ of degree $n\ge0$, with the spaces, maps and coefficients needed in each assertion.

1.1 Replacing $\varphi$ by $\varphi+\delta\psi$ changes its value on $c$ by $(\delta\psi)(c)=\psi(\partial c)=\psi(0)=0$. Replacing $c$ by $c+\partial b$ changes its value under $\varphi$ by $\varphi(\partial b)=(\delta\varphi)(b)=0$. The replacement cocycle is still closed and the replacement cycle still a cycle by their defining quotient subgroups. Applying the two equalities successively therefore allows both representatives to change at once. This proves descent through both quotients. [F1, F2]

2.1 On representatives $(\varphi+\psi)(c)=\varphi(c)+\psi(c)$ and $\varphi(c+c')=\varphi(c)+\varphi(c')$. Zero and negatives obey the same evaluation rules. In the ring version, $\varphi(rc)=r\varphi(c)$ and $(r\varphi)(c)=r\varphi(c)$ by $R$-linearity; the two vanishing calculations of step 1.1 use the same positive differential and remain valid for $R$-linear maps. [F1, F2, step 1.1]

2.2 For representatives of $\alpha,z$, the left spatial pairing is $(\varphi f_\#)(c)=\varphi(f_\#c)$, exactly the right pairing by [F3]. Its representatives are valid cycles and cocycles because the induced maps preserve them. Likewise $(u\varphi)(c)=u(\varphi(c))$ proves coefficient naturality. Step 1.1 makes these representative identities identities on quotient classes. [F1, F3, step 1.1]

3.1 Step 1.1 proves representative independence, step 2.1 descends to biadditivity and the stated $R$-bilinearity, and step 2.2 proves naturality. In degree zero there are no negative cochains to change the cocycle, but changing a zero-cycle by a one-boundary is still covered by the second calculation. Negative-degree groups and empty-space or zero-coefficient groups pair to zero. On a point, the degree-zero chain $m[x]$ evaluates to $m\varphi(x)$, including $m=0$ and $m=1$; no generators in higher unnormalized chain degrees are discarded. The proof compares arbitrary representatives without choosing a representative function, so it uses no AC. [F1, F2, step 1.1, step 2.1, step 2.2] ∎
