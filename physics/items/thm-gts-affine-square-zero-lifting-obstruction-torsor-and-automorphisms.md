---
id: thm-gts-affine-square-zero-lifting-obstruction-torsor-and-automorphisms
kind: theorem
title: Affine square-zero lifting obstruction, torsor, and automorphisms
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
dependency_level: 1
deps:
  - def-cotangent-complex-of-a-ring-map
  - def-ext-groups-of-the-cotangent-complex
  - def-square-zero-extension-and-small-extension
  - lem-cotangent-complex-resolution-independence
  - def-axiom-of-choice
  - lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification
  - def-cotangent-complex-of-a-scheme-morphism
  - lem-cotangent-complex-truncation-and-smooth-case
dependency_roles:
  lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification: mathematical-premise
  def-cotangent-complex-of-a-scheme-morphism: mathematical-premise
  lem-cotangent-complex-truncation-and-smooth-case: mathematical-premise
  def-cotangent-complex-of-a-ring-map: mathematical-premise
  def-ext-groups-of-the-cotangent-complex: mathematical-premise
  def-square-zero-extension-and-small-extension: mathematical-premise
  lem-cotangent-complex-resolution-independence: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project Authors, The Cotangent Complex, Lemma 92.16.1/tag 08SP
      url: https://stacks.math.columbia.edu/download/cotangent.pdf
      locator: Full statement and proof of Lemma 92.16.1/tag 08SP, PDF pp. 31–32.
    - title: The Stacks Project Authors, Deformation Theory, Chapter 91
      url: https://stacks.math.columbia.edu/download/defos.pdf
      locator: §2, Lemmas 2.1–2.3 and 2.7, Remark 2.8, PDF pp. 2–5.
    - title: Robin Hartshorne, Lectures on Deformation Theory, Math 274 draft
      url: https://math.berkeley.edu/~robin/math274root.pdf
      locator: Chapter 1, §§1–2, printed pp. 1–10; Chapter 2, §10, Theorem 10.1, printed pp. 58–60.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Statement

Assume the Axiom of Choice. Let $A'\twoheadrightarrow A$ be a square-zero extension with kernel $I$, let $A\to B$ be a flat ring map, let $N$ be a $B$-module, and let $c:I\to N$ be an $A$-linear map. A marked extension is a surjection of $A'$-algebras $B'\twoheadrightarrow B$ whose kernel is identified with $N$, has square zero, and whose induced map on the kernel of $A'\to A$ is $c$; isomorphisms preserve the quotient $B$ and the specified kernel map. The source convention gives a canonical obstruction in $\operatorname{Ext}^2_B(L_{B/A},N)$, whose vanishing is equivalent to existence; when nonempty, isomorphism classes form an $\operatorname{Ext}^1_B(L_{B/A},N)$-torsor and automorphisms of a chosen extension are $\operatorname{Ext}^0_B(L_{B/A},N)=\operatorname{Der}_A(B,N)$. Here $\operatorname{Der}_A(B,N)$ is the abelian group of additive $A$-linear maps $D:B\to N$ satisfying $D(bb')=bD(b')+b'D(b)$. The flat deformation specialization uses $N=B\otimes_A I$ and $c(i)=1\otimes i$.

## Statement references

[Stacks Project, Lemma 92.16.1/tag 08SP](https://stacks.math.columbia.edu/download/cotangent.pdf)

## Extension diagram

The vertical map $A'\to B'$ extends the given structure map $A\to B$; its restriction on $I$ is the specified $c$. The lower row records the marked square-zero kernel. The diagram fixes the extension convention and is not used as a proof.

```tikzcd
0 \arrow[r] & I \arrow[r] \arrow[d,"c"] & A' \arrow[r] \arrow[d] & A \arrow[r] \arrow[d] & 0 \\
0 \arrow[r] & N \arrow[r] & B' \arrow[r] & B \arrow[r] & 0
```

## Facts & Assumptions

**Given:** the square-zero extension $A'\twoheadrightarrow A$, its kernel $I$, the flat $A$-algebra $B$, the $B$-module $N$, the $A$-linear map $c:I\to N$, and AC.

[F1] [[lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification]] proves marked square-zero extension classification by polynomial pushouts, its naturality and the exact restriction fiber, including automorphisms.

[F2] [[def-cotangent-complex-of-a-scheme-morphism]] gives the canonical transitivity triangle, applied to $\operatorname{Spec}B\to\operatorname{Spec}A\to\operatorname{Spec}A'$, and its affine comparison. [[def-cotangent-complex-of-a-ring-map]] and [[lem-cotangent-complex-resolution-independence]] fix the canonical derived ring complexes.

[F3] [[lem-cotangent-complex-truncation-and-smooth-case]] identifies a polynomial conormal complex with $\tau_{\ge-1}L$ and $H^0(L_{B/A})$ with $\Omega_{B/A}$. [[def-ext-groups-of-the-cotangent-complex]] defines derived Ext.

[F4] [[def-square-zero-extension-and-small-extension]] fixes the square-zero kernel convention. [[def-axiom-of-choice]] supplies the standing AC assumption for [F1]–[F3].

## Proof

**Given:** [F1]–[F4] and the marked extension data of the Statement. Write $C=L_{A/A'}\otimes_A^{\mathbf L}B$, $K=L_{B/A'}$ and $L=L_{B/A}$.

1.1 Present the surjection $A'\to A$ by the polynomial $A'$-algebra with no variables, namely $A'$ itself. Its conormal complex is $[I/I^2\to0]=I[1]$. Thus $L_{A/A'}$ has $H^0=0$, $H^{-1}=I$ and lies in degrees at most $-1$. Since $B$ is flat over $A$, $C$ also lies in those degrees and $H^{-1}(C)=B\otimes_AI$. Derived Hom into $N[0]$ consequently gives $\operatorname{Ext}^0_B(C,N)=0$ and $\operatorname{Ext}^1_B(C,N)=\operatorname{Hom}_B(B\otimes_AI,N)$. Indeed its part in degrees at most $-2$ has Hom into an injective resolution of $N$ zero in degrees below two; truncation at $-1$ therefore gives precisely these assertions. Let $\gamma$ be the latter Hom element $b\otimes i\mapsto b\,c(i)$. This map is well defined by the assumed $A$-linearity. [F3, F4, given, construct, algebra]

2.1 By [F1], classes in $\operatorname{Ext}^1_B(K,N)$ are exactly square-zero $A'$-algebra extensions of $B$ by the specified $N$. The map to $\operatorname{Ext}^1_B(C,N)$ induced by transitivity records their induced map on $I$. To check this explicitly, pull an extension back along $A\to B$. Present $A$ over $A'$ using the no-variable presentation from step 1.1; evaluation of $i\in I$ is its image in the extension kernel. The conormal description in [F1] therefore gives exactly $i\mapsto c_E(i)$, or $b\otimes i\mapsto b\,c_E(i)$ after extending coefficients to $B$. The naturality calculation in [F1] shows this is the actual canonical cotangent map, independent of the presentation. Hence the required marked classes are exactly the fiber over $\gamma$, with no additional map choices or compatibility conditions left over. [F1, F2, step 1.1, algebra]

3.1 The canonical triangle is $C\to K\to L\to C[1]$. Apply derived Hom into $N$. Its long exact sequence contains $\operatorname{Ext}^1_B(K,N)\to\operatorname{Ext}^1_B(C,N)\xrightarrow{\partial}\operatorname{Ext}^2_B(L,N)$. Define $o=\partial\gamma$. Exactness says $o=0$ if and only if the fiber in step 2.1 is nonempty, proving both directions of the existence assertion. This constructs the obstruction using the full cotangent complex; the generally false substitution of the two-term naive complex into an untruncated transitivity triangle has not been made. Canonical transitivity and the comparison in [F2], together with the explicit restriction computation of step 2.1, prove presentation independence of $o$. [F1, F2, F3, step 1.1, step 2.1, construct]

3.2 By [F1] an automorphism is $e\mapsto e+D(\bar e)$, with $D:B\to N$ an $A'$-derivation. Such derivations are exactly $A$-derivations because the structural map $A'\to B$ factors through the surjection $A'\to A$. Composition adds $D$ and the inverse uses $-D$. The universal property of differentials gives $\operatorname{Der}_A(B,N)=\operatorname{Hom}_B(\Omega_{B/A},N)=\operatorname{Ext}^0_B(L,N)$ by [F3]. This proves the asserted automorphism group with its group law, and it fixes the prescribed kernel pointwise. [F1, F3, step 2.1, algebra]

4.1 The preceding part of that sequence is $\operatorname{Ext}^0_B(C,N)\to\operatorname{Ext}^1_B(L,N)\to\operatorname{Ext}^1_B(K,N)\to\operatorname{Ext}^1_B(C,N)$. Its first term vanishes by step 1.1, so $\operatorname{Ext}^1_B(L,N)$ injects and its image is exactly the kernel of restriction. Translation in this abelian group therefore acts freely and transitively on each nonempty fiber. Under [F1] it is the action obtained by adding square-zero extension classes through the fiber-product and kernel-sum construction. Thus the marked isomorphism classes form precisely the stated torsor, rather than a quotient of that group. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 In the flat-deformation specialization the required kernel is $N=B\otimes_AI$ and $\gamma$ is the identity of this module. For any flat $A'$-algebra lift $E$ with $E/IE=B$, tensor $0\to I\to A'\to A\to0$ over $A'$ with $E$: exactness gives $0\to I\otimes_{A'}E\to E\to B\to0$. Here $I\otimes_{A'}E=I\otimes_AB$ because $I^2=0$, and the structure map sends $i$ to $1\otimes i$. This proves the precise kernel specialization. It does not presume a lift exists: existence is decided by step 3.1. In particular no expression $B\otimes_A A'$ is used, since the given surjection need not have an $A$-algebra section. The zero-kernel and zero-module cases are included by the same exact sequence and zero fiber. All assertions follow. [F4, step 3.1, step 4.1, step 3.2, algebra] ∎
