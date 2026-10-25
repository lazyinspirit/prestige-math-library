---
id: ex-pid-kunneth-over-a-field-has-no-tor-correction
kind: example
title: "Over a field the cross product itself is a natural isomorphism"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-pid-kunneth-exactness-from-cycle-boundary-presentations, prop-modules-over-a-field-are-projective-flat-and-injective, def-balanced-tor-bifunctor, thm-recursion, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "tom Dieck, Algebraic Topology, Theorem 11.10.1, printed pp.298–299; field specialization"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf
---

## Example

Assume AC and let $k$ be a field. Take $C_0=ka$, $C_1=kb$, $D_0=ku$, $D_1=kv$, all other terms zero, and every differential zero. In the direct-sum tensor total complex the homology bases are
$$H_0:k(a\otimes u),\qquad H_1:k(b\otimes u)\oplus k(a\otimes v),\qquad H_2:k(b\otimes v).$$
All other homology groups vanish. Every Tor correction is zero. More generally, over $k$, the cross product is a natural isomorphism for any nonnegative free complexes as in the AC-qualified PID Kunneth theorem; its inverse is determined by the cross product itself.

## Facts & Assumptions

**Given:** The field, complexes, and [[def-axiom-of-choice]] in the example.

[F1] Nonnegative free PID complexes have the natural Kunneth short exact sequence under AC: [[thm-pid-kunneth-exactness-from-cycle-boundary-presentations]].

[F2] Under AC, every module over a field is free and projective: [[prop-modules-over-a-field-are-projective-flat-and-injective]]. Only those clauses are used.

[F3] Balanced Tor is computed using either supplied projective resolution: [[def-balanced-tor-bifunctor]].

[F4] A self-map of a set can be iterated from any prescribed initial element: [[thm-recursion]].

[F5] DC is the assertion that every entire relation on a nonempty set has such a sequence from a prescribed initial point: [[def-dependent-choice]].

## Verification

1.1 A field is a PID: a nonzero ideal contains $c\ne0$, hence also $c^{-1}c=1$ and so is the whole field; the remaining ideal is $(0)$. The displayed complexes are nonnegative and have free terms with their stated bases, so [F1] applies. Each factor has zero differential, and the Koszul formula gives $d(a\otimes u)=d(b\otimes u)=d(a\otimes v)=d(b\otimes v)=0$. The only tensor terms are exactly those displayed in degrees $0,1,2$. [F1, given]

1.2 First derive the DC hypothesis of [F3] from the assumed AC. Given an entire relation $E$ on a nonempty set $S$ and $a\in S$, AC chooses for each $x\in S$ an element $f(x)$ of the nonempty successor set $E_x=\{y:xEy\}$. By [F4], iterate $f$ from $a$ to obtain $x_0=a$ and $x_{m+1}=f(x_m)$, so $x_mEx_{m+1}$ for every $m$; this is [F5]. Now for any $k$-modules $U,V$, [F2] makes both projective under AC. Supply the resolutions having $U$, respectively $V$, only in degree zero and identity augmentation. The tensor resolution then has no positive-degree terms, so its homology in every degree $i>0$ is zero. Hence [F3] gives $\operatorname{Tor}_1^k(U,V)=0$, including zero $U$ or $V$. In particular every summand in the Kunneth Tor term vanishes for any complexes under discussion. [given, F2, F3, F4, F5]

2.1 These tensors are bases: for example $(\lambda b)\otimes(\mu u)\mapsto\lambda\mu$ and $\nu\mapsto\nu(b\otimes u)$ are inverse linear maps $kb\otimes ku\leftrightarrow k$, since balancing identifies $(\lambda b)\otimes(\mu u)$ with $(\lambda\mu)(b\otimes u)$. The same formulas apply to the other three one-dimensional factors. In degree one the two bidegrees form a direct sum. As all differentials vanish, every element is a cycle and the only boundary is zero; this proves the listed homology bases and vanishing elsewhere. [step 1.1]

3.1 Exactness in [F1] now makes the cross product $\alpha_n$ injective and surjective for every $n$. In this instance it sends $[a]\otimes[u]$, $[b]\otimes[u]$, $[a]\otimes[v]$, $[b]\otimes[v]$ to the four homology basis elements in that order. Its inverse sends those four elements back to the four tensors of classes, extended linearly. Both composites fix a basis and therefore every element. Degree zero has an empty Tor sum; degree one has the single zero group $\operatorname{Tor}_1(k,k)$; in higher degrees the same vanishing argument applies, including where every term is zero. [F1, step 2.1, step 1.2]

4.1 For arbitrary maps of such complexes write $h$ for the induced map on tensor-complex homology and $k_*$ for the induced map on the tensor of homologies. Naturality in [F1] gives $h\alpha_n=\alpha'_nk_*$. Multiplying by the inverses just proved gives $\alpha_n'^{-1}h=k_*\alpha_n^{-1}$. Hence the inverse is natural as well. There is no selected complement in this inverse: it is the unique inverse of the canonical cross product after the Tor term vanishes. [F1, step 3.1] ∎
