---
id: ex-pid-polynomial-ring-kunneth-tor-class
kind: example
title: "A polynomial PID has a nonzero Kunneth Tor class"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-pid-kunneth-exactness-from-cycle-boundary-presentations, thm-pid-kunneth-splitting-from-cycle-boundary-presentations, def-balanced-tor-bifunctor, thm-polynomial-degree-of-a-product-over-a-domain, thm-polynomial-division-algorithm-over-a-field, thm-euclidean-domain-is-a-pid, lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel, thm-recursion, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Friedman, Singular Intersection Homology, §6.4.5, Lemma 6.4.19, printed pp.318–320; specialized two-term representative"
      url: https://faculty.tcu.edu/gfriedman/ihbook.pdf
    - title: "tom Dieck, Algebraic Topology, Theorem 11.10.1, printed pp.298–299"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf
---

## Example

Assume AC and let $k$ be a field. Over the PID $R=k[t]$, take $C=D=(R\xrightarrow{t}R)$ in degrees $1,0$, with respective bases $e_1,e_0$ and $f_1,f_0$. With the direct-sum total complex and Koszul differential,
$$H_i(C\otimes_RD)\cong\begin{cases}R/(t)&i=0,1,\\0&i\notin\{0,1\}.\end{cases}$$
The class $[e_1\otimes f_0-e_0\otimes f_1]$ maps to the generator $[1]$ of $\operatorname{Tor}_1^R(R/(t),R/(t))\cong R/(t)$. Thus the tensor cross product alone does not exhaust degree-one homology, although the Kunneth sequence has a section.

## Facts & Assumptions

**Given:** A field $k$, the two displayed complexes, and [[def-axiom-of-choice]].

[F1] Products of nonzero polynomials over a domain are nonzero and degrees add: [[thm-polynomial-degree-of-a-product-over-a-domain]].

[F2] Polynomial division over a field gives a zero remainder or one of degree smaller than the nonzero divisor: [[thm-polynomial-division-algorithm-over-a-field]].

[F3] Every Euclidean domain is a PID: [[thm-euclidean-domain-is-a-pid]].

[F4] The AC-qualified natural Kunneth sequence uses the cycle tensor cross product: [[thm-pid-kunneth-exactness-from-cycle-boundary-presentations]].

[F5] Under the same hypotheses its quotient has a linear section: [[thm-pid-kunneth-splitting-from-cycle-boundary-presentations]].

[F6] Balanced Tor is computed from either supplied projective resolution under DC: [[def-balanced-tor-bifunctor]].

[F7] The cycle-boundary kernel calculation identifies the Kunneth quotient as the corestricted $H(\rho\otimes1)$ with positive sign: [[lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel]].

[F8] A self-map of a set can be iterated from any prescribed initial element: [[thm-recursion]].

[F9] DC is the assertion that every entire relation on a nonempty set has such a sequence from a prescribed initial point: [[def-dependent-choice]].

## Verification

1.1 Since $k$ is a field, it is a domain. By [F1], $k[t]$ is a domain, $t\ne0$, and $t$ is not a unit: $tf=1$ for nonzero $f$ would give $1+\deg f=0$. By [F2], degree on the nonzero polynomials satisfies the Euclidean division condition (the convention requires no multiplicative monotonicity). Thus [F3] applies and $R$ is a commutative PID. Multiplication by $t$ on $R$ is injective, so $H_0C=H_0D=R/(t)$ and all other homology groups of the two input complexes vanish. [F1, F2, F3, given]

1.2 Write $u=e_1\otimes f_0$, $v=e_0\otimes f_1$, $w=e_0\otimes f_0$, and $h=e_1\otimes f_1$. The tensor total complex has terms $Rh$, $Ru\oplus Rv$, $Rw$ in degrees $2,1,0$. Its Koszul formula gives $d_1(u)=tw$, $d_1(v)=tw$, and $d_2(h)=t v-t u$. Thus in the ordered basis $(u,v)$, $d_1(a,b)=t(a+b)$ and $d_2(c)=(-tc,tc)$; $d_1d_2(c)=t(-tc+tc)=0$. [F4, given]

2.1 The image of $d_1$ is $tRw$, so $H_0=Rw/tRw\cong R/(t)$. Since $t$ is not a zero divisor, $d_1(a,b)=0$ exactly when $a+b=0$. Hence $\ker d_1=R(u-v)$ and $\operatorname{im}d_2=tR(u-v)$, giving $H_1\cong R/(t)$ via $[a]\mapsto[a(u-v)]$. Also $d_2(c)=0$ forces $tc=0$ and hence $c=0$, so $H_2=0$. There are no chain terms in the other degrees. [step 1.1, step 1.2]

2.2 First derive the DC hypothesis of [F6] from the assumed AC. Given an entire relation $E$ on a nonempty set $S$ and $a\in S$, AC chooses a successor function $f:S\to S$ with $xEf(x)$ for every $x$. By [F8], iterate $f$ from $a$; the resulting sequence satisfies [F9]. The length-one free resolution $R\xrightarrow{t}R\to R/(t)$ of the first module, tensored with $R/(t)$, has differential zero and no degree-two term. Thus [F6] gives $\operatorname{Tor}_1^R(R/(t),R/(t))=R/(t)$, represented by $1\otimes[1]$. In the cycle-boundary presentation $B_0C=tRe_0\hookrightarrow Z_0C=Re_0$, identify its degree-one free module $R$ by $a\mapsto at e_0$. This is an isomorphism because $t$ is nonzero in a domain. [given, step 1.1, F6, F8, F9]

3.1 The map $\rho_1:C_1\to B_0C$ sends $e_1$ to $te_0$, while $\rho_0$ is zero. Therefore $\rho\otimes1$ sends the degree-one cycle $u-v$ to $te_0\otimes f_0$, whose homology image is $te_0\otimes[f_0]$. Under the resolution identification of step 2.2, this is exactly $1\otimes[1]$, the positive generator. Since $1\notin(t)$, the image and the original class are nonzero. This calculation works also in characteristic two, where minus equals plus but $a+b=0$ still means $b=-a$. [step 1.2, step 2.1, step 2.2, F7]

4.1 In degree one the tensor term of [F4] is zero because only degree-zero input homology is nonzero. Hence the quotient is an isomorphism, with section explicitly $[a]\mapsto[a(u-v)]$, well defined by step 2.1 and inverse by step 3.1. It is a section of the kind guaranteed by [F5]. In degree zero, multiplication gives $R/(t)\otimes_RR/(t)\cong R/(t)$ with inverse $[a]\mapsto[a]\otimes[1]$: balancing gives $[a]\otimes[b]=[ab]\otimes[1]$. The cross product carries this tensor generator to $[w]$. These computations verify the zero and one degree endpoints and all higher vanishing. [F4, F5, step 1.1, step 2.1, step 3.1] ∎
