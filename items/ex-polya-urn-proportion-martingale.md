---
id: "ex-polya-urn-proportion-martingale"
kind: "example"
title: "Polya urn proportion martingale"
deps: ["def-martingale-submartingale-and-supermartingale", "thm-lebesgue-measure-is-a-complete-measure", "def-half-open-box", "thm-generated-sigma-algebra-exists-and-is-minimal", "prop-restriction-is-a-measure", "def-conditional-expectation-as-an-ae-class", "lem-conditional-expectation-is-unique-almost-surely", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "thm-arithmetic-and-lattice-operations-preserve-measurability", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Example

Assume AC. Start with $r,g$ positive integers of red and green balls, and reinforce each drawn color by $c\ge1$. For integer $c$ this counts balls; the same construction works for real $c\ge1$ as color weights. If $R_n$ is the red count or weight after $n$ draws, then $R_n/(r+g+nc)$ is a bounded martingale for the draw-history filtration at every $n\ge0$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Under countable choice Lebesgue measure exists and agrees with half-open interval length. [[thm-lebesgue-measure-is-a-complete-measure]].

[F2] Restriction of a measure to a measurable set is a measure. [[prop-restriction-is-a-measure]].

[F3] Under AC every integrable input has a measurable integrable conditional version. [[def-conditional-expectation-as-an-ae-class]].

[F4] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F5] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 Use $\Omega=(0,1]$ with the trace Lebesgue sigma-algebra and length probability. Restriction is a measure by [F2] (equivalently restrict its event formula to subsets of $\Omega$), and [F1] gives total mass one. Define intervals for finite color words recursively: $I_{\varnothing}=(0,1]$. If $h$ has length $n$, contains $j$ red letters, and $I_h=(a,b]$, put $T_n=r+g+nc$ and $p_h=(r+cj)/T_n$. Then $0<p_h<1$ because both $r+cj$ and $g+c(n-j)$ are positive. Set $I_{hR}=(a,a+p_h(b-a)]$ and $I_{hG}=(a+p_h(b-a),b]$. Both are positive-length half-open intervals [[def-half-open-box]], disjoint with union $I_h$. Induction gives a finite partition at every depth, and each point has exactly one compatible word of every finite length. Thus every draw is defined on this one space by the interval containing the point; no infinite-product existence is assumed. [given, F1, F2]

2.1 Let $\mathcal F_n$ consist of all unions of depth-n intervals. Complements and countable unions just select subsets of this finite partition, so it is a sigma-algebra. Refinement makes it a filtration. A word interval is exactly the intersection of the corresponding first n color events; conversely a color event up to n is a union of word intervals. Hence $\mathcal F_n$ is the draw-history sigma-algebra. On $I_h$ set $R_n=r+cj$ and $U_n=R_n/T_n$. These are finite-valued $\mathcal F_n$-measurable variables and $0<U_n<1$. If $J_{n+1}$ indicates the next red draw, then $\int_{I_h}J_{n+1}\,dP=P(I_{hR})=p_hP(I_h)=\int_{I_h}U_n\,dP$. Finite addition proves this identity for every event in $\mathcal F_n$. Both variables are bounded, so [F3] identifies $E[J_{n+1}\mid\mathcal F_n]=U_n$. [F1, F3, step 1.1]

3.1 The pathwise update is $R_{n+1}=R_n+cJ_{n+1}$. The bounded $\mathcal F_n$-measurable $R_n$ is its own conditional version, since its event identities are tautologies. Since $T_n+c$ is deterministic and positive, conditional linearity gives $E[U_{n+1}\mid\mathcal F_n]=(R_n+cU_n)/(T_n+c)=R_n(1+c/T_n)/(T_n+c)=R_n/T_n=U_n$. Thus the bounded adapted process is a martingale [[def-martingale-submartingale-and-supermartingale]]. For $r=g=c=1$, $U_0=1/2$ and the first two possible new proportions are $2/3$ and $1/3$, each with probability $1/2$; their mean is $1/2$. After the first red draw the next proportions are $3/4$ and $1/2$ with probabilities $2/3$ and $1/3$, whose mean is $1/2+1/6=2/3$. AC supplies the countable choice assumed in Lebesgue construction and CE existence; the interval recursion itself makes no selections. [F3, F4, F5, step 1.1, step 2.1] ∎
