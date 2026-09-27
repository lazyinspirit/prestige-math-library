---
id: lem-group-rings-have-invariant-basis-number-via-augmentation
kind: lemma
title: "Integral group rings have invariant basis number"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-group-ring, def-augmentation-map-and-augmentation-ideal-of-a-group-ring, thm-nonzero-commutative-rings-have-invariant-basis-number, def-ring-homomorphism, def-natural-numbers, def-integers, def-int-operations, thm-int-comm-ring, def-stable-general-linear-group-and-elementary-subgroup-of-a-ring, thm-group-ring-is-a-unital-algebra-with-basis-g]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Lück, §2.2, contraction-torsion setup pp.27–28"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "§2.2, contraction-torsion setup pp.27–28"
---
## Statement

For every discrete group $\pi$, the integral group ring $\mathbb Z[\pi]$ has invariant basis number: an isomorphism of finite free right $\mathbb Z[\pi]$-modules $\mathbb Z[\pi]^m\cong\mathbb Z[\pi]^n$ forces $m=n$. More generally, if $R$ is an associative unital ring admitting a unital ring homomorphism $R\to S$ into a nonzero commutative unital ring $S$, then an isomorphism of finite free right $R$-modules $R^m\cong R^n$ forces $m=n$.

## Facts & Assumptions

**Given:** An associative unital ring $R$ with a unital ring homomorphism $\varphi:R\to S$ into a nonzero commutative unital ring $S$.

[F1] For $n\ge0$ the module $R^n$ consists of column vectors with entrywise addition and the right action $(v\cdot r)_i=v_ir$, every right-linear $f:R^m\to R^n$ has a unique matrix $A\in M_{n\times m}(R)$ with $(Av)_i=\sum_jA_{ij}v_j$, and the matrix of a composite is the product in the displayed order ([[def-stable-general-linear-group-and-elementary-subgroup-of-a-ring]]).

[F2] A unital ring homomorphism preserves sums, products and the identity, so entrywise application of $\varphi$ commutes with matrix multiplication and with the identity matrices ([[def-ring-homomorphism]]).

[F3] Every nonzero commutative unital ring has invariant basis number for finite bases: $S^m\cong S^n$ as $S$-modules implies $m=n$ ([[thm-nonzero-commutative-rings-have-invariant-basis-number]]).

[F4] For a group $\pi$ the integral group ring $\mathbb Z[\pi]$ is a unital ring with basis the elements $[g]$, and the augmentation $\varepsilon:\mathbb Z[\pi]\to\mathbb Z$ is a ring homomorphism with $\varepsilon([g])=1$ ([[def-group-ring]], [[thm-group-ring-is-a-unital-algebra-with-basis-g]], [[def-augmentation-map-and-augmentation-ideal-of-a-group-ring]]).

[F5] The integer operations make $\mathbb Z$ a commutative unital ring ([[thm-int-comm-ring]]). Its zero and unit are represented by $[(0,0)]$ and $[(1,0)]$ ([[def-integers]], [[def-int-operations]]); these classes differ, since their equality would require $0=1$ in $\mathbb N$, whereas $0=\varnothing$ and $1=\{0\}$ ([[def-natural-numbers]]). Thus $\mathbb Z$ is nonzero.

## Proof

**Proof technique:** direct.

1.1 Suppose $f:R^m\to R^n$ and $g:R^n\to R^m$ are mutually inverse right-linear maps. By [F1] the images of the standard basis vectors have unique coordinate expressions, so $f$ and $g$ have matrices $A\in M_{n\times m}(R)$ and $B\in M_{m\times n}(R)$ with $f(v)=Av$ and $g(w)=Bw$ for columns $v,w$; composing the coordinate formulas and using uniqueness of coordinates gives $BA=I_m$ from $g\circ f=\mathrm{id}$ and $AB=I_n$ from $f\circ g=\mathrm{id}$. [given, F1]

2.1 Applying $\varphi$ entrywise to the two matrix identities yields matrices $\varphi(A)\in M_{n\times m}(S)$ and $\varphi(B)\in M_{m\times n}(S)$ with $\varphi(A)\varphi(B)=\varphi(AB)=I_n$ and $\varphi(B)\varphi(A)=\varphi(BA)=I_m$. [F2, step 1.1]

3.1 Since $S$ is commutative, the matrix $\varphi(A)$ defines an $S$-linear map $S^m\to S^n$, $x\mapsto\varphi(A)x$, whose composite with $x\mapsto\varphi(B)x$ is the identity in both orders by step 2.1; hence $S^m\cong S^n$ as $S$-modules. [step 2.1]

4.1 As $S$ is a nonzero commutative unital ring, [F3] applies to this isomorphism and gives $m=n$. [F3, step 3.1]

5.1 For $R=\mathbb Z[\pi]$ take $\varphi=\varepsilon$: by [F4] the group ring is a unital ring and the augmentation is a unital ring homomorphism onto $\mathbb Z$, which is a nonzero commutative unital ring by [F5]; step 4.1 therefore shows that an isomorphism $\mathbb Z[\pi]^m\cong\mathbb Z[\pi]^n$ of finite free right modules forces $m=n$, and the general clause is step 4.1 itself. [F3, F4, F5, step 4.1] ∎
