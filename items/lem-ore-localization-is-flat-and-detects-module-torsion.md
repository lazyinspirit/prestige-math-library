---
id: lem-ore-localization-is-flat-and-detects-module-torsion
kind: lemma
title: Ore localization is flat and detects module torsion
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ring
  - def-division-ring
  - def-left-and-right-modules
  - def-balanced-and-bilinear-maps
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-exact-and-short-exact-sequences-of-modules
  - def-left-and-right-flat-modules-over-an-arbitrary-ring
  - def-chain-complex-with-coefficients-by-tensoring
  - def-homology-object-of-a-chain-complex
  - def-opposite-ring
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Tim D. Cochran, Kent E. Orr, and Peter Teichner, Knot concordance,
        Whitney towers and L²-signatures, Remark 2.6
      url: https://arxiv.org/pdf/math/9908117
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 3
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
dependency_level: 0
---

## Statement

Let $R$ be a unital ring with $1\ne0$ and no zero divisors. Suppose both Ore conditions hold: any two nonzero elements have a nonzero common right multiple and a nonzero common left multiple. Let $R\subseteq K$ be a unital embedding into a division ring such that every element of $K$ is a right fraction $as^{-1}$ with $a\in R$ and $0\ne s\in R$.

For every right $R$-module $M$, the right $K$-module $M\otimes_RK$ is represented by fractions $[m,s]$ with $m\in M$ and $0\ne s\in R$, corresponding to $m\otimes s^{-1}$. The equality criterion is
$$[m,s]=[n,t]\quad\Longleftrightarrow\quad\text{there exist }0\ne u,v\in R\text{ with }su=tv\text{ and }mu=nv.$$
In particular, $[m,s]=0$ if and only if $ma=0$ for some $0\ne a\in R$. Thus the kernel of $M\to M\otimes_RK$, $m\mapsto m\otimes1$, is exactly the set of elements with a nonzero right annihilator, and $M\otimes_RK=0$ if and only if every element of $M$ has a nonzero right annihilator.

The functor $-\otimes_RK$ is exact on arbitrary right $R$-modules, so $K$ is flat as a left $R$-module. For every chain complex $C_\bullet$ of right $R$-modules, the canonical map gives a natural isomorphism
$$H_i(C_\bullet)\otimes_RK\xrightarrow{\ \cong\ }H_i(C_\bullet\otimes_RK)$$
for every integer $i$. No finite-generation, finite-presentation or boundedness assumption on the modules or complexes is required.

The corresponding left-module assertions also hold: $K$ is flat as a right $R$-module, $1\otimes m$ is zero in $K\otimes_RM$ precisely when $am=0$ for some $0\ne a\in R$, and $K\otimes_R-$ commutes with the homology of arbitrary left-module chain complexes. All assertions require no choice axiom.

## Statement references

[[def-tensor-product-of-modules-by-generators-and-relations]]

[[def-left-and-right-flat-modules-over-an-arbitrary-ring]]

[[def-chain-complex-with-coefficients-by-tensoring]]

[[def-homology-object-of-a-chain-complex]]

[[def-opposite-ring]]

## Facts & Assumptions

**Given:** Exactly the ring embedding, two Ore conditions and right-fraction property in the Statement.

[F1] Right modules are unital additive groups with the right distributivity and associativity axioms; division rings are unital rings in which every nonzero element is invertible ([[def-ring]], [[def-division-ring]], [[def-left-and-right-modules]]).

[F2] A balanced biadditive map from a right module and a left module satisfies $b(mr,k)=b(m,rk)$. The tensor product is the free abelian group on pairs modulo these additivity and balancing relations, and its elements are finite sums of elementary tensors ([[def-balanced-and-bilinear-maps]], [[def-tensor-product-of-modules-by-generators-and-relations]]).

[F3] Exactness means image equals kernel; a left module is flat when tensoring it with right modules is exact, and the right-flat definition has the sides reversed ([[def-exact-and-short-exact-sequences-of-modules]], [[def-left-and-right-flat-modules-over-an-arbitrary-ring]]).

[F4] Tensoring a chain complex means tensoring its terms and differentials, and homology is cycles modulo boundaries ([[def-chain-complex-with-coefficients-by-tensoring]], [[def-homology-object-of-a-chain-complex]]).

[F5] Opposite multiplication reverses factors while leaving addition and identity unchanged ([[def-opposite-ring]]).

## Proof

**Given:** An arbitrary right $R$-module $M$. Put $S=R\setminus\{0\}$.

1.1 On pairs $(m,s)\in M\times S$, impose the relation $(m,s)\sim(n,t)$ if $su=tv$ and $mu=nv$ for some $u,v\in S$. The right Ore condition supplies the common denominators. Reflexivity and symmetry are immediate. For transitivity, suppose $su=tv$, $mu=nv$, and $tp=wq$, $np=lq$. Choose $e,f\in S$ with $ve=pf$. Then $sue=tve=tpf=wqf$ and $mue=nve=npf=lqf$, proving $(m,s)\sim(l,w)$. The needed products remain nonzero because $R$ has no zero divisors. Thus this defines a quotient set $L(M)$. Write its elements as $[m,s]$. Every pair has the same class as its refinement $(ma,sa)$ for $a\in S$. Moreover two equivalent pairs have a refinement with the same denominator and the same numerator, directly from the relation. [F1, given, construct, algebra]

2.1 Define $[m,s]+[n,t]=[mu+nv,su]$ whenever $su=tv$ with $u,v\in S$. This is independent of the common denominator: if $su'=tv'=w'$, refine $w=su$ and $w'$ to $wc=w'c'$; cancellation by the nonzero $s$ and $t$ gives $uc=u'c'$ and $vc=v'c'$, so the two numerator sums agree after refinement. Replacing an input pair by a refinement also leaves the sum unchanged: refine the chosen common denominator and the refined input denominator once more and use the same cancellation argument. Since every equivalence is witnessed by equal refinements, addition is independent of input representatives. Any finite set of denominators has a common right multiple by finite induction. Computing three sums at one such denominator proves associativity and commutativity. The zero is $[0,1]$ and the negative of $[m,s]$ is $[-m,s]$. Consequently $L(M)$ is an abelian group. [F1, step 1.1, construct, algebra]

3.1 Define $\alpha:L(M)\to M\otimes_RK$ by $[m,s]\mapsto m\otimes s^{-1}$. If $su=tv=w$, then $s^{-1}=uw^{-1}$ and $t^{-1}=vw^{-1}$ in $K$. Balancing therefore gives $m\otimes s^{-1}=mu\otimes w^{-1}$, and similarly for $n$. The equivalence relation makes $\alpha$ well-defined, and the common-denominator addition formula makes it additive. Conversely, for $k=as^{-1}\in K$ put $\beta(m,k)=[ma,s]$. If also $k=bt^{-1}$, choose $su=tv=w$ and multiply the equality in $K$ on the right by $w$ to obtain $au=bv$. This is equality in the embedded $R$, so $[ma,s]=[mb,t]$. Thus $\beta$ is independent of the right-fraction presentation. [F1, F2, step 1.1, step 2.1, algebra, construct]

4.1 The map $\beta$ is biadditive: addition in $m$ uses one denominator, and addition of $as^{-1}$ and $bt^{-1}$ uses the common-denominator formula $(au+bv)w^{-1}$ with $su=tv=w$. It is balanced, since $\beta(mr,as^{-1})=[mra,s]=\beta(m,ras^{-1})$. Hence [F2]'s quotient presentation gives a homomorphism $\bar\beta:M\otimes_RK\to L(M)$. The two maps are inverse: $\bar\beta\alpha[m,s]=[m,s]$, while $\alpha\bar\beta(m\otimes as^{-1})=ma\otimes s^{-1}=m\otimes as^{-1}$, and elementary tensors generate. This proves the asserted fraction model and equality criterion. Right multiplication in $K$ defines $(m\otimes k)\ell=m\otimes k\ell$ and respects every tensor relation, so it equips this group with its stated right $K$-module structure. [F1, F2, step 2.1, step 3.1, algebra]

5.1 By the relation in step 1.1, $[m,s]=[0,1]$ implies $mu=0$ for some $u\in S$. Conversely, if $ma=0$ with $a\in S$, then the common denominator $sa=1(sa)$ proves $(m,s)\sim(0,1)$. Thus the zero criterion holds for every denominator. At $s=1$ it gives the kernel assertion. If each $m$ has a nonzero right annihilator then each fraction is zero, hence the localized module is zero; the converse follows by applying the zero criterion to each $[m,1]$. This uses only individual existential annihilators, not a simultaneous choice of them. [step 1.1, step 4.1, algebra]

6.1 A right-module homomorphism $f:M\to N$ induces $L(f)[m,s]=[f(m),s]$, which agrees under step 4.1 with $f\otimes1$. If $f$ is injective and $[f(m),s]=0$, step 5.1 gives $f(m)a=f(ma)=0$ for some $a\in S$; hence $ma=0$ and $[m,s]=0$. Thus localization preserves injections. If $f$ is surjective, lift the one numerator of any $[n,s]$ to obtain a preimage fraction, proving surjectivity. For maps $P\xrightarrow{f}M\xrightarrow{g}N$ exact at $M$, a fraction $[m,s]$ in $\ker L(g)$ satisfies $g(m)a=0$ for some $a\in S$. Then $ma\in\ker g=\operatorname{im}f$, so take $p\in P$ with $f(p)=ma$. The refinement equality $[m,s]=[ma,sa]=L(f)[p,sa]$ proves $\ker L(g)\subseteq\operatorname{im}L(f)$; the reverse inclusion follows from $gf=0$. This proves exactness on all right modules and left flatness of $K$, without finiteness conditions. [F3, step 1.1, step 4.1, step 5.1, algebra]

7.1 For an arbitrary right-module chain complex, put $Z_i=\ker d_i$ and $B_i=\operatorname{im}d_{i+1}$. Apply step 6.1 to $0\to Z_i\to C_i\to B_{i-1}\to0$ and to the inclusion $B_{i-1}\to C_{i-1}$. Their tensor images identify the kernel of $d_i\otimes1$ with $Z_i\otimes_RK$. Applying the same reasoning to $C_{i+1}\to B_i\to C_i$ identifies its image with the embedded $B_i\otimes_RK$. Finally exactness applied to $0\to B_i\to Z_i\to H_i(C)\to0$ identifies the quotient of these localized cycles by localized boundaries with $H_i(C)\otimes_RK$. The resulting isomorphism is the canonical map $[z]\otimes k\mapsto[z\otimes k]$. Each construction uses the original inclusions and quotient maps, so it commutes with every chain map and is natural. The proof works degree by degree and neither chooses bases nor imposes a bound on the complex. [F4, step 6.1, algebra, construct]

8.1 To obtain the left statements, every $k=as^{-1}\in K$ is also a left fraction: if $a\ne0$, use the left Ore condition to choose $t,b\in S$ with $ta=bs$, giving $k=t^{-1}b$; for $k=0$ use $1^{-1}0$. Thus $K^{\mathrm{op}}$ is a right-fraction division ring of $R^{\mathrm{op}}$, whose right Ore condition is the original left one. A left $R$-module is a right $R^{\mathrm{op}}$-module by $m\cdot r=rm$. Apply steps 1.1–7.1 to these opposite rings. The tensor relation identifies $M\otimes_{R^{\mathrm{op}}}K^{\mathrm{op}}$ with $K\otimes_RM$ by $m\otimes k\mapsto k\otimes m$. The zero condition becomes $am=0$, flatness becomes right flatness, and the chain-homology result has the stated left-handed order. All denominators, refinements, lifts and annihilators in the argument were chosen only for a fixed finite collection in an individual assertion. There is no appeal to a choice axiom, even for arbitrary modules or unbounded complexes. [F1, F2, F3, F4, F5, step 7.1, algebra] ∎

## Remarks

The choice-free PTFA Ore theorem supplies examples of the fraction-ring hypotheses: the PTFA fraction-ring theorem. The present lemma is ring-theoretic and also applies to other Ore subrings of a division ring whenever that same division ring is their ring of fractions. It asserts no nonsingularity, geometric duality or Blanchfield-pairing theorem.

## Remarks references

[[thm-ptfa-group-rings-are-ore-domains]]
