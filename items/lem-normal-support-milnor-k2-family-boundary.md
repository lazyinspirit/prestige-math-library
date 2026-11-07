---
id: lem-normal-support-milnor-k2-family-boundary
kind: lemma
title: Componentwise Milnor tame boundary of a K1 family on a normal support
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - lem-principal-cycle-has-finite-support-on-noetherian-integral-scheme
  - lem-order-function-one-dimensional-local-domain
  - def-axiom-of-choice
sources:
  references:
    - title: Gillet and Soulé, Arithmetic intersection theory
      url: https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf
      locator: Section 4.2.6, printed p. 143; the sign convention and the normal-support Milnor calculation are made explicit below.
---

## Statement

Assume the Axiom of Choice. Let $W$ be a quasi-compact Noetherian normal integral scheme with function field $F$, and let $t,f\in F^\times$. For each codimension-one point $x$ write $v_x$ for the normalized valuation of the DVR $\mathcal O_{W,x}$ and $\kappa(x)$ for its residue field. Define the finite-symbol Milnor group $K_2^M(F)$ as $(F^\times\otimes_\mathbb Z F^\times)$ modulo the symbols $a\otimes(1-a)$ for $a\ne0,1$. For a discrete valuation v, the proof constructs a homomorphism $D_v:K_2^M(F)\to\kappa(v)^\times$ by the formula below. Write $D_x(t,f):=D_{v_x}(\{t,f\})$ and write the target multiplicative group additively. This convention is the negative of the Milnor boundary for which $\partial_v^M\{u,\pi\}=[\bar u]$. Set $r_x=v_x(t)$ and $s_x=v_x(f)$. At each point where $(r_x,s_x)\ne(0,0)$ choose a uniformizer $\pi_x$, put $u_x=t/\pi_x^{r_x}$ and $v_x'=f/\pi_x^{s_x}$, and write bars for their residues. Then only finitely many components $D_x(t,f)$ are nonzero and
$$D_x(t,f)=r_x[\overline{v_x'}]-s_x[\overline{u_x}]+r_xs_x[-1].$$
The displayed value is independent of the chosen uniformizer. If the codimension-one supports of $\operatorname{div}_W(t)$ and $\operatorname{div}_W(f)$ are disjoint, this specializes in the direct sum $\bigoplus_{x\in W^{(1)}}\kappa(x)^\times$ to
$$\sum_x D_x(t,f)=\sum_{r_x\ne0}r_x[\bar f_x]-\sum_{s_x\ne0}s_x[\bar t_x].$$
For a family with parameter $t$ on a normal component $W\to\mathbb P^1$, the first sum consists of the zero and infinity fibers with their actual valuation multiplicities; the second is the term $-\{t\}\operatorname{div}_W(f)$. The same identity holds componentwise for any finite sum of such normal supports. It does not assert a singular-support normalization formula, proper-pushforward compatibility, logarithmic-current descent, or a moving lemma.

## Statement references

[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]

[[lem-principal-cycle-has-finite-support-on-noetherian-integral-scheme]]

[[lem-order-function-one-dimensional-local-domain]]

## Facts & Assumptions

**Given:** AC, the normal quasi-compact Noetherian integral scheme W, and t,f in its function field as in the Statement.

[F1] Every height-one localization of a Noetherian normal domain is a DVR. [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]

[F2] Principal cycles on a quasi-compact Noetherian integral scheme have finite support under AC. [[lem-principal-cycle-has-finite-support-on-noetherian-integral-scheme]]

[F3] Under AC the length-defined order on a DVR is its normalized valuation. [[lem-order-function-one-dimensional-local-domain]]

[A1] AC is the explicit hypothesis of the finite-support and local-order suppliers. [[def-axiom-of-choice]]

## Proof

**Proof technique:** The explicit two-entry Milnor boundary formula at each DVR.

1.1 For any codimension-one point x of W, take an affine neighborhood Spec A. Normality makes A integrally closed, and the localization A_p at the corresponding height-one prime is a DVR by [F1]. Its valuation is v_x. [F1, given, construct]

2.1 By [F2]–[F3], the sets of x with v_x(t)≠0 and with v_x(f)≠0 are finite. Their union is finite. At each of its points choose one uniformizer π_x; no choice of uniformizers at the remaining points is needed. [A1, F2, F3, step 1.1, construct]

3.1 At one chosen x, write any a=π^r u and b=π^s v with u,v units and r,s integers. Define T_x(a,b)=(-1)^(rs)·bar(v)^r/bar(u)^s in κ(x)×. It is multiplicative in each argument: when multiplying two a’s or two b’s, their valuations add and their unit parts multiply, and the exponents of −1 add. If π is replaced by πc with c a unit, the new residue unit parts are bar(u)·bar(c)^(−r) and bar(v)·bar(c)^(−s); the extra powers cancel, so T_x is independent of π. It kills every Steinberg pair (a,1−a). If v_x(a)>0 then 1−a is a unit of residue 1. If v_x(1−a)>0 then a is a unit of residue 1. If both valuations are zero the formula is 1. If v_x(a)<0 then v_x(1−a)=v_x(a)=r and the residue of the leading unit for 1−a is the negative of that for a, so T_x(a,1−a)=(-1)^(r²+r)=1. These cases exhaust a≠0,1 by the valuation inequality. Thus T_x descends through the explicitly defined tensor and Steinberg relations to a homomorphism D_x on K₂^M(F). In additive target notation its value is r[bar v]−s[bar u]+rs[−1]. For r=s=0 it is zero. The corresponding conventional boundary has ∂{u,π}=[bar u], so D is its negative. [step 2.1, construct, algebra, cases]

4.1 Suppose the supports of div_W(t) and div_W(f) are disjoint. Then rs=0 at every codimension-one point. When r≠0, s=0 and bar v=bar f; when s≠0, r=0 and bar u=bar t. Step 3.1 therefore becomes r[bar f] on the first support, −s[bar t] on the second, and zero elsewhere. Summing over the finite union of supports gives the displayed direct-sum identity with the prescribed signs and multiplicities. [F2, F3, step 2.1, step 3.1, algebra, cases]

5.1 If t is pulled back from the coordinate on P¹, a codimension-one valuation of t is positive exactly over the zero point and negative exactly over infinity. Thus the first part is the difference of the two fiber restrictions with their valuation multiplicities, and the second is the term −{t}div_W(f). The same valuation calculation applies independently to each of finitely many supports and can be summed. A general family may have singular components, and no compatibility with proper pushforward or logarithmic currents is inferred. This proves exactly the stated componentwise Milnor identity. [step 3.1, step 4.1, given, algebra] ∎
