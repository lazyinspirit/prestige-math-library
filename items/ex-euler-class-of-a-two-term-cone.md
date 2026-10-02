---
id: "ex-euler-class-of-a-two-term-cone"
kind: "example"
title: "Euler class of a two-term mapping cone"
deps: [def-mapping-cone-of-a-chain-map, lem-triangulated-k-zero-shifts-and-exact-functors, lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant, thm-perfect-complex-k-zero-agrees-with-projective-k-zero, def-derived-category-of-an-abelian-category, def-zero-and-stalk-complex]
sources:
  references:
    - title: "The Stacks Project, More on Algebra, Lemma 15.121.1"
      url: "https://stacks.math.columbia.edu/tag/0FJG"
    - title: "Khovanov and Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2e.1"
      url: "https://arxiv.org/pdf/math/0006056"
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Let $f:P\to Q$ be a homomorphism of finitely generated projective left
$A$-modules over a unital associative ring $A$, regarded as degree-zero cochain
complexes. Then $\operatorname{Cone}(f)$ has $P$ in degree $-1$ and $Q$ in
degree $0$. Hence $[\operatorname{Cone}(f)]=[Q[0]]-[P[0]]$ in
$K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$ and
$\chi(\operatorname{Cone}(f))=[Q]-[P]$ in
$K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))$. In particular the
cone of right multiplication $r_a:A\to A$, $x\mapsto xa$, on the left regular
module has Euler class zero for every $a\in A$, regardless of its kernel or
cokernel.

## Facts & Assumptions

**Given:** A unital associative ring $A$; a homomorphism $f:P\to Q$ of finitely generated projective left $A$-modules, viewed as cochain complexes concentrated in degree $0$; and an element $a\in A$.

[F1] The mapping cone of a chain map $f:C_\bullet\to D_\bullet$ has $\operatorname{Cone}(f)_n=D_n\oplus C_{n-1}$ with differential $d_n(y,x)=(d_n^Dy+f_{n-1}x,-d_{n-1}^Cx)$ ([[def-mapping-cone-of-a-chain-map]]).

[F2] In the cochain convention of the derived category, $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$ with $d(y,x)=(d_Yy+fx,-d_Xx)$ for a chain map $f:X\to Y$ of cochain complexes, the cone triangle ends in $X[1]$, and the degree-zero stalk complex $S^0(M)$ has $M$ in degree $0$ and zero elsewhere ([[def-derived-category-of-an-abelian-category]], [[def-zero-and-stalk-complex]]).

[F3] In $K_0^{\mathrm{tri}}$, $[X[n]]=(-1)^n[X]$ ([[lem-triangulated-k-zero-shifts-and-exact-functors]]).

[F4] For a bounded complex $P$ of finitely generated projective left modules, $\chi(P)=\sum_n(-1)^n[P^n]$ defines a class depending only on the represented perfect object ([[lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant]]).

[F5] Degree-zero inclusion gives the isomorphism $K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))\to K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$ with $[P]\mapsto[P[0]]$ ([[thm-perfect-complex-k-zero-agrees-with-projective-k-zero]]).

## Verification

**Proof technique:** direct.

1.1 Under cochain reindexing $X^i=X_{-i}$, the chain-cone terms $D_n\oplus C_{n-1}$ of [F1] become $Q^i\oplus P^{i+1}$, agreeing with the cochain formula of [F2]. For degree-zero stalk complexes, the only nonzero terms are $Q$ in degree $0$ and $P$ in degree $-1$, with differential $f:P\to Q$. Thus $\operatorname{Cone}(f)$ is bounded with finitely generated projective terms. [F1, F2, algebra]

2.1 The cone triangle $P[0]\to Q[0]\to\operatorname{Cone}(f)\to P[1]$ of [F2] is a distinguished triangle of $D_{\mathrm{perf}}(A)$, since all three terms are bounded complexes of finitely generated projectives; its relation and the shift sign [F3] give $[\operatorname{Cone}(f)]=[Q[0]]+[P[1]]=[Q[0]]-[P[0]]$ in $K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$. Independently, the Euler class formula of [F4] on the two-term complex of step 1.1 gives $\chi(\operatorname{Cone}(f))=(-1)^{-1}[P]+(-1)^0[Q]=[Q]-[P]$ in $K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))$, and the comparison isomorphism of [F5] carries this class to $[Q[0]]-[P[0]]$, so the two computations agree as promised. [F2, F3, F4, F5, step 1.1, algebra]

3.1 Right multiplication $r_a(x):=xa$ is left $A$-linear: $r_a(bx)=(bx)a=b(xa)=b\,r_a(x)$ for all $b,x\in A$. Taking $P=Q=A$ and $f=r_a$ in step 2.1 gives $[\operatorname{Cone}(r_a)]=[A[0]]-[A[0]]=0$ and $\chi(\operatorname{Cone}(r_a))=[A]-[A]=0$ for every $a\in A$, whatever the kernel $\{x:xa=0\}$ and cokernel $A/Aa$ may be: the two projective terms cancel even when the cone is not acyclic, and no assertion that its cohomology modules are projective is used. [F4, F5, step 2.1, algebra] ∎
