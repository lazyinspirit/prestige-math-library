---
id: lem-qa-coherent-amplitude-grid-rounding
kind: lemma
title: Efficient coherent rounding of amplitude-estimation grid values
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - thm-principal-inverse-tangent-calculus
  - def-principal-inverse-tangent
  - lem-tangent-principal-branch-is-bijective
  - thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant
  - thm-sine-and-cosine-derivatives
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - thm-cofunction-supplementary-and-reflection-identities
  - cor-taylor-remainder-bound
  - cor-mean-value-theorem
  - alg-qc-reversible-embedding
  - thm-qc-reversible-embedding-cost
justified_by: []
proof_strategy: direct
axiom_use: "None; all arithmetic and circuit constructions are finite and deterministic."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: NIST Digital Library of Mathematical Functions, Section 4.24
      url: https://dlmf.nist.gov/4.24
    - title: John Preskill, Quantum Computation, Sections 5.2.2–5.2.3
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
---

## Statement

For every integer $k\ge2$, put $M=2^k$. There is a deterministic uniformly
generated finite reversible circuit with the action

$$|y,z,0^w\rangle\longmapsto|y,z\mathbin{\mathrm{XOR}}a_M(y),0^w\rangle$$

for every $k$-bit integer $0\le y<M$ and every $(2k+1)$-bit target $z$,
where $a_M(y)$ is an integer satisfying

$$0\le a_M(y)\le M^2,\qquad a_M(0)=0,\qquad
\left|\frac{a_M(y)}{M^2}-\sin^2\left(\frac{\pi y}{M}\right)\right|
\le\frac{3}{4M^2}.$$

Circuit generation time, gate count in $X$, CNOT and Toffoli, serial depth,
and clean workspace are all polynomial in $k$. The identity holds on
arbitrary coherent inputs and with finite reference registers. Its actual
inverse and coherent controls have the same polynomial resource order.
The algorithm uses only bounded exact integer/rational arithmetic with
fixed loop counts depending on $k$; it performs no real equality test or
equality-dependent precision refinement. The output encodes the rational
$a_M(y)/M^2$ by its numerator and the known fixed denominator.

## Facts & Assumptions

**Given:** The finite encodings and elementary reversible gate model in the Statement.

[F1] [[thm-principal-inverse-tangent-calculus]], [[def-principal-inverse-tangent]] and [[lem-tangent-principal-branch-is-bijective]] give the arctangent integral and the increasing principal tangent branch.

[F2] [[thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant]], [[thm-cofunction-supplementary-and-reflection-identities]] and [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]] give tangent addition/subtraction, the value at $\pi/4$, and the bounds $|\sin|,|\cos|\le1$.

[F3] [[thm-sine-and-cosine-derivatives]] gives the sine/cosine derivatives and values at zero; [[cor-taylor-remainder-bound]] gives the finite Taylor error estimate.

[F4] [[cor-mean-value-theorem]] applied to sine gives $|\sin u-\sin v|\le|u-v|$.

[F5] [[alg-qc-reversible-embedding]] and [[thm-qc-reversible-embedding-cost]] give compute-copy-reverse of a Boolean DAG, linear node/port overhead, clean work restoration, and coherent/reference extension.

## Proof

1.1 Put $a=\arctan(1/5)$ and $b=\arctan(1/239)$. Principal monotonicity and $\tan(\pi/4)=1$ give $0<b<a<\pi/4$. The tangent double-angle formula gives $\tan(2a)=5/12<1$, so $2a<\pi/4$ and $0<4a<\pi/2$. A second doubling gives $\tan(4a)=120/119>1$, hence $4a>\pi/4>b$. The subtraction formula gives $\tan(4a-b)=\frac{120/119-1/239}{1+(120/119)(1/239)}=1.$ All denominators are positive, and $0<4a-b<4a<\pi/2$. Injectivity of the principal tangent branch therefore proves $4a-b=\pi/4$, or $\pi=16\arctan(1/5)-4\arctan(1/239)$. This is a local proof of the needed Machin identity. [F1, F2, algebra]

1.2 For $0\le x<1$ and any integer $J\ge1$, the exact finite geometric identity is $\frac1{1+t^2}=\sum_{j=0}^{J-1}(-1)^jt^{2j} +\frac{(-1)^Jt^{2J}}{1+t^2}.$ Integrating from zero to $x$ and using the arctangent integral yields $\left|\arctan x-\sum_{j=0}^{J-1}\frac{(-1)^jx^{2j+1}}{2j+1}\right| \le\frac{x^{2J+1}}{2J+1}.$ This is a finite bound, requiring no limit test during the algorithm. Set $J=k+8$ and form the exact rational $\widehat\pi=16\sum_{j=0}^{J-1}\frac{(-1)^j}{(2j+1)5^{2j+1}} -4\sum_{j=0}^{J-1}\frac{(-1)^j}{(2j+1)239^{2j+1}}.$ Steps 1.1–1.2 give $|\widehat\pi-\pi|\le\frac{20}{5^{2J+1}} \le\frac1{1024M^2},$ because $5^{2k}\ge2^{2k}=M^2$ and $20\cdot1024<5^{17}$. In particular $0<\widehat\pi<4$: for the lower bound, $\pi/4=\int_0^1(1+t^2)^{-1}\,dt>1/2$ gives $\pi>2$; for the upper bound, step 1.1 and $\arctan(1/5)<1/5$ give $\pi<16/5$, and the displayed error is below $1/1024$. [F1, step 1.1, algebra, construct]

2.1 Set $x=\widehat\pi y/M$, so $0\le x<4$, and set the even integer $n=16(k+4)$. Compute the exact rational sine polynomial $S(x)=\sum_{j=0}^{n/2-1}\frac{(-1)^jx^{2j+1}}{(2j+1)!}.$ Every derivative of sine has absolute value at most one. The Taylor remainder bound at degree $n-1$ gives $|S(x)-\sin x|\le\frac{4^n}{n!} \le\left(\frac{32}{n}\right)^{n/2} \le2^{-n/2}\le\frac1{4096M^2}.$ Indeed the last $n/2$ factors in $n!$ are at least $n/2$, so $n!\ge(n/2)^{n/2}$, and $n\ge96\ge64$. Finally $n/2=8(k+4)\ge2k+12$ gives the stated precision. [F3, step 1.2, algebra, construct]

2.2 The derivative bound for sine and the mean value theorem give $|\sin x-\sin(\pi y/M)|\le|\widehat\pi-\pi|y/M \le1/(1024M^2)$. Put $s=\sin(\pi y/M)$ and $d=5/(4096M^2)$. Step 2.1 implies $|S(x)-s|\le d<1$ and $|s|\le1$. Consequently $|S(x)^2-s^2|\le d(2+d)\le3d =\frac{15}{4096M^2}<\frac1{4M^2}.$ Thus the exact rational square $r=S(x)^2$ approximates the desired probability with absolute error strictly below $1/(4M^2)$. [F3, F4, step 1.2, step 2.1, algebra]

3.1 If $y=0$, set $a_M(y)=0$ explicitly. Otherwise write the exact rational $r=U/V$ with integers $U\ge0$ and $V>0$, without requiring cancellation to lowest terms. Use integer division to compute $q=\left\lfloor\frac{2M^2U+V}{2V}\right\rfloor,\qquad a_M(y)=\min(M^2,\max(0,q)).$ The floor rule is deterministic nearest-grid rounding, breaking rational half-grid ties upward. Hence $|q/M^2-r|\le1/(2M^2)$. Clipping to $[0,1]$ cannot increase distance from the true probability $s^2\in[0,1]$. Step 2.2 therefore gives $\left|a_M(y)/M^2-s^2\right| <\frac1{4M^2}+\frac1{2M^2}=\frac3{4M^2}.$ For $y=0$, the exact target is zero, so the bound also holds. Every comparison in this procedure compares finite integers, including any tie; there is no comparison against an exact transcendental number. [step 2.2, algebra, construct]

4.1 All rational computations above have polynomial bit length in $k$. For the arctangent sum at $q\in\{5,239\}$, one may take as an unreduced common denominator $D_q=\prod_{j=0}^{J-1}(2j+1)q^{2j+1}$, whose bit length is $O(J^2+J\log(J+1))=O(k^2)$. Obtain each numerator by exact division of this known multiple, then sum with the indicated signs. A common denominator for $\widehat\pi$ is $D_5D_{239}$, still of $O(k^2)$ bits; the same bound holds for its numerator. Therefore $x=P/Q$ can be written with integer $P\ge0$, $Q>0$ of $O(k^2)$ bits, without rational reduction. [step 1.2, algebra]

4.2 A common denominator for the sine polynomial is $D=Q^{n-1}(n-1)!$. Its $j$th integer numerator term is $(-1)^jP^{2j+1}Q^{n-2j-2}\frac{(n-1)!}{(2j+1)!}.$ All exponents are nonnegative and every indicated division is exact. The powers, factorials, terms, common denominator, and signed partial sums have $O(k^3)$ bits: $n=O(k)$, $\log P,\log Q=O(k^2)$, and $\log((n-1)!)=O(k\log(k+1))$. Summing $O(k)$ terms adds only $O(\log(k+1))$ extra bits. Thus $S=A/D$ can be computed with $O(k^3)$-bit signed integers; $U=A^2$, $V=D^2$, and the final integer division in step 3.1 have the same bit-length order. [step 2.1, step 4.1, algebra]

4.3 There are only polynomially many arithmetic operations: products for the two denominators, powers and factorials, $O(k)$ Taylor terms and their exact divisions, and one final quotient/clamp. Schoolbook addition, subtraction and comparison of $L$-bit integers use $O(L)$ elementary Boolean operations, multiplication uses $O(L^2)$ operations by summing shifted partial products, and long division uses $O(L^2)$ operations by $O(L)$ shift/compare/subtract stages. Signed integers can use a sign bit and a magnitude of the fixed safe length; all denominators are known positive. The operation counts and safe register lengths depend only on $k$. Unroll their loops and implement data branches by Boolean selection between the two computed results. Thus a deterministic classical generator produces a Boolean DAG for $y\mapsto a_M(y)$ of polynomial size and description length in $k$, in polynomial time. This also covers generation of the rational constants; no constant table of exponential length or unit-cost unbounded integer arithmetic is assumed. [step 3.1, step 4.1, step 4.2, construct, algebra]

5.1 Apply compute-copy-reverse to that Boolean DAG: evaluate its nodes in fresh clean bits, XOR-copy its $(2k+1)$ output bits to $z$, and reverse every evaluation gate. The inspected reversible embedding theorem gives the asserted XOR action, polynomial elementary gate count, serial depth and clean workspace, all restored to zero. The Boolean circuit's uniform generation proof in step 4.3, followed by the finite node-gadget compiler, gives polynomial-time generation of the actual reversible gate list. The clean identity extends by linearity to coherent inputs and finite references. Its actual reversal has identical gate count. For an external control, either use a compute/controlled-copy/uncompute construction on the same Boolean function, or control the fixed reversible gate list; the former directly gives a constant-factor resource increase and restores all scratch. No real-number refinement or measurement occurs. This proves the Statement. [F5, step 4.3, construct, algebra] ∎

## Remarks

The fixed rational approximation and integer rounding avoid any equality-dependent real refinement. Its error is smaller than $M^{-2}$, as required by the shared relative-probability consumer; that consumer retains its own stopping, median, confidence and coherent-branch analysis.
