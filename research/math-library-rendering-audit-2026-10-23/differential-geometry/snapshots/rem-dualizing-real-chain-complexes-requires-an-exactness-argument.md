---
id: "rem-dualizing-real-chain-complexes-requires-an-exactness-argument"
kind: "remark"
title: "Dualizing real chain complexes requires an exactness argument"
deps: ["def-axiom-of-choice", "def-dependent-choice", "rem-dualizing-real-vector-space-sequences-and-the-choice-boundary"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 false-statement inventory; exact refutation or unresolved wording recorded in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $C_\bullet$ be a chain complex of real vector spaces, with $d_n:C_n\to C_{n-1}$ and $d_nd_{n+1}=0$. Its real dual cochain complex has $C^n=\operatorname{Hom}_{\mathbb R}(C_n,\mathbb R)$ and $\delta^nf=f\circ d_{n+1}$.

Under AC, evaluation on cycles gives a natural isomorphism $$\varepsilon_C^n:H^n(C^\bullet)\longrightarrow \operatorname{Hom}_{\mathbb R}(H_n(C_\bullet),\mathbb R),\qquad [f]\longmapsto([z]\longmapsto f(z)).$$ Consequently a real-linear chain map inducing homology isomorphisms in all degrees induces cohomology isomorphisms after real dualization.

In the separate branch ZF + DC plus the hypothesis that every subset of $P=\mathbb R^{\mathbb N}$ has the Baire property in its product topology, the acyclic complex $E\to P\to P/E$ in homological degrees $2,1,0$, where $E=\mathbb R^{(\mathbb N)}$, has nonzero real-dual cohomology in degree 2. Thus dualization does not preserve quasi-isomorphisms in this conditional setting. This is not a consistency or nonprovability theorem.

## Facts & Assumptions

**Given:** The objects and separate axiom branches of the statement.

[F1] Under AC ([[def-axiom-of-choice]]), a real-linear functional on a subspace extends to the containing vector space, by the basis construction in [[rem-dualizing-real-vector-space-sequences-and-the-choice-boundary]], proof 1.1. In that item's separate DC branch ([[def-dependent-choice]]), the functional $\ell(x)=\sum_nx_n$ on $E$ does not extend to $P$.

Write $Z_n=\ker d_n$, $B_n=\operatorname{im}d_{n+1}$ and $H_n=Z_n/B_n$. The square-zero identity implies $B_n\subseteq Z_n$. Cohomology is $H^n=\ker\delta^n/\operatorname{im}\delta^{n-1}$.

## Proof

1.1 If $f:C_n\to\mathbb R$ is a cocycle, then $f(d_{n+1}c)=0$ for all $c$, so $f$ vanishes on $B_n$. Its restriction to $Z_n$ therefore descends to $H_n$. If $f$ is replaced by $f+g\circ d_n$, its values on cycles are unchanged. Likewise replacing $z$ by $z+d_{n+1}c$ leaves $f(z)$ unchanged. Hence $\varepsilon_C^n$ is well-defined and linear. This construction and these two representative checks use no choice. [given, algebra]

2.1 Assume AC. Given $h:H_n\to\mathbb R$, compose it with the quotient $Z_n\to H_n$ to obtain a functional on $Z_n$. By [F1] extend this to $f:C_n\to\mathbb R$. It vanishes on $B_n$, since its restriction to $Z_n$ does, and hence $f$ is a cocycle. Its image under $\varepsilon_C^n$ is $h$. This proves surjectivity. The sole selection in this step is the functional extension furnished under AC. [F1, step 1.1]

2.2 If a cocycle class is sent to zero, its representative $f$ vanishes on $Z_n$. Define $b:B_{n-1}\to\mathbb R$ by $b(d_nc)=f(c)$. If $d_nc=d_nc'$, then $c-c'\in Z_n$, so $f(c)=f(c')$; thus b is well-defined. Applying this rule to sums and scalar multiples of any preimages proves linearity, without selecting a family of preimages. Extend $b$ to $g:C_{n-1}\to\mathbb R$ using [F1]. Then $f=g\circ d_n=\delta^{n-1}g$, so its class is zero. Conversely every coboundary vanishes on cycles, as already checked in step 1.1. This proves injectivity and both directions of the zero-class criterion. [F1, step 1.1]

3.1 Let $u:C_\bullet\to D_\bullet$ be a real-linear chain map. Precomposition defines $u^*:D^n\to C^n$ and commutes with coboundary, because $u_nd_{n+1}^C=d_{n+1}^Du_{n+1}$. For a cocycle $f$ on D and a cycle $z$ on C, $$\varepsilon_C^n([f\circ u_n])([z])=f(u_nz) =\big(\varepsilon_D^n([f])\circ H_n(u)\big)([z]).$$ This proves naturality. If $H_n(u)$ is an isomorphism, precomposition by it is an isomorphism of real duals, with inverse precomposition by its inverse. Steps 2.1 and 2.2 and this commuting identity show that $H^n(u^*)$ is an isomorphism. No bases are chosen to define the canonical evaluation map or the naturality square. [step 1.1, step 2.1, step 2.2]

4.1 In contrast to the AC conclusion of step 3.1, now assume only the DC and Baire-property hypotheses of the second branch. Put $C_2=E$, $C_1=P$, $C_0=P/E$, with $d_2$ the inclusion, $d_1$ the quotient and every other group and differential zero. The composite $d_1d_2$ is zero. The inclusion has zero kernel, the quotient has kernel E, and the quotient is surjective. It follows directly that $H_2(C)=H_1(C)=H_0(C)=0$, and all remaining homology groups vanish because their chain groups are zero. Thus the unique chain map $C\to0$ is a quasi-isomorphism in every degree. [given, step 3.1, algebra]

5.1 The dual complex in degrees $0,1,2$ is $$(P/E)^*\xrightarrow{q^*}P^*\xrightarrow{i^*}E^*,$$ and its differential out of degree 2 is zero. Therefore $$H^2(C^\bullet)=E^*/\operatorname{im}(P^*\to E^*).$$ By the second clause of [F1], the explicit functional $\ell$ is omitted from that image; its class in this quotient is nonzero. The dual of $C\to0$ is $0\to C^\bullet$, whose induced degree-2 map from zero cannot be surjective. This is a conditional real-vector-space example, with no change of coefficient field and no model-existence assertion. [F1, step 4.1]

6.1 The zero complex satisfies the positive assertion with the unique isomorphism $0\to0$ in every degree. For a nonnegative complex, at degree zero $Z_0=C_0$; the kernel case of step 2.2 gives $f=0$ directly, and no negative-degree extension is required. For a complex supported at one degree with group $\mathbb R$ and zero differential, evaluation is the usual map $\mathbb R^*\to\mathbb R^*$ and is the identity. The proof does not assume injective differentials or nonzero chain groups: all zero and repeated maps are governed by the displayed square-zero identity. The abstract conditional complex of step 4.1 is not asserted to be a singular chain complex of any space. [step 1.1, step 2.2, step 4.1] ∎
