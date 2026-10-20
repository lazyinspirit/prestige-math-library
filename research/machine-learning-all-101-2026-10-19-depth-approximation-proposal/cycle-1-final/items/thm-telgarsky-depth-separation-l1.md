---
id: thm-telgarsky-depth-separation-l1
kind: theorem
title: "Depth separation with explicit semi-algebraic crossing budgets"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-relu-network, lem-relu-tent-iterate-depth, lem-bernstein-polynomial-lipschitz-error]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Telgarsky, Benefits of Depth in Neural Networks"
      url: "https://proceedings.mlr.press/v49/telgarsky16.pdf"
      locator: "Definition 2.1; Sections 3.1–3.4; Appendix A.2. The parameter condition below repairs the omitted inequality in the proof of Theorem 1.1."
---

## Statement

Let integers $k,d,t,\alpha,\beta\ge1$ be given, put $q=k^3+4$, and define $f(x)=h^q(x_1)$ on $[0,1]^d$, where $h(z)=\rho(2\rho(z)-4\rho(z-1/2))$ and $\rho(z)=\max\{0,z\}$. A gate is $(t,\alpha,\beta)$-semi-algebraic if it is a finite sum of polynomial pieces of degree at most $\beta$ multiplied by conjunctions of the tests $p_i<0$ and $p_i\ge0$ for one common list of at most $t$ polynomials of degree at most $\alpha$. A computational layer counts gates and excludes input coordinates; the output gate is counted and may be ReLU. In this convention $f$ has $2q$ computational layers, $3q$ gates, and at most $d+4$ shared scalar parameter slots. In the affine-output ReLU convention one may instead append an identity affine output, adding one computation unit and one computational layer.

For an integer node budget $m\ge1$, define

$$B(k,m,t,\alpha,\beta)=\max_{1\le\ell\le\min(k,m)}2(2t\alpha m/\ell)^\ell\beta^{\ell(\ell+1)/2}.$$

Every network of these semi-algebraic gates with at most $k$ computational layers and $m$ gates satisfies

$$\|f-g\|_{L^1([0,1]^d)}\ge\max\{0,(2^q+1-2B(k,m,t,\alpha,\beta))/(16\cdot2^q)\}.$$

In particular its error is at least $1/64$ whenever $B(k,m,t,\alpha,\beta)\le2^{q-2}$. The original exponential budget $m\le2^{k/(t\alpha\beta)}$ is sufficient under the explicit parameter condition

$$(t\alpha\beta)2^{k/(t\alpha\beta)}\le2^k.$$

For each fixed gate class this condition holds for all sufficiently large $k$, and it holds for every $k\ge1$ for $(t,\alpha,\beta)=(1,1,1)$. Independently of that condition, every linear combination of at most $t$ affine-threshold decision trees, each with at most $2^{k^3/t}$ total nodes including leaves and constant leaf outputs, has error at least $1/64$ for every positive integer $t$. The gate-parameter condition cannot simply be dropped from the exponential-budget assertion.

## Statement references

[Telgarsky, Definition 2.1 and Sections 3.1–3.4](https://proceedings.mlr.press/v49/telgarsky16.pdf)

## Facts & Assumptions

**Given:** The parameters, gate definitions and complexity conventions in the statement. All root counts and interval partitions below disregard a finite set of endpoints, which has Lebesgue measure zero.

[F1] The $q$th tent iterate has $2^q$ equal affine intervals, with alternating slopes of magnitude $2^q$ and range $[0,1]$ on each ([[lem-relu-tent-iterate-depth]]).

[F2] An $L$-Lipschitz target has Bernstein error at most $L/(2\sqrt N)$ ([[lem-bernstein-polynomial-lipschitz-error]]).

## Proof

1.1 A computational block with two gates $\rho(z)$, $\rho(z-1/2)$ followed by the gate $\rho(2u-4v)$ computes $h$. Compose $q$ blocks, identifying repeated parameter slots. Only the coordinate-selection vector of length $d$ and the four scalar slots $0,-1/2,2,-4$ are needed: the first vector supplies coefficient $1$ for the selected coordinate and coefficient $0$ for the others, and its selected coefficient $1$ may also supply the fixed unit coefficient in subsequent blocks. There are $3q$ gates and $2q$ computational layers. Appending an affine identity produces the stated conversion. On the cube the output is the tent iterate in [F1]. [given, F1, construct]

1.2 Fix all coordinates except $x_1=z$, and consider any comparator with actual nonempty layer widths $m_1,\ldots,m_\ell$ and $\ell\le k$, $\sum_i m_i\le m$. Maintain one common partition of the line into open intervals on which all gates through layer $i$ are polynomials of degree at most $\beta^i$. Initially there is one interval and input coordinates are affine. In one previous interval, each of the at most $tm_i$ gate predicates at layer $i$ is a polynomial of degree at most $\alpha\beta^{i-1}$ after substitution, hence introduces at most that many roots unless identically zero, in which case its test is constant. Thus the new common partition has at most $1+tm_i\alpha\beta^{i-1}$ pieces per old piece. On each piece all indicators are constant, and the gate output is a polynomial of degree at most $\beta^i$. Skip edges cause no change: earlier outputs already have polynomial degree at most $\beta^{i-1}$ on this common partition. [given, construct, induction]

2.1 It follows that the threshold classifier $1[g(z)\ge1/2]$ is constant on at most $C=(1+\beta^\ell)\prod_{i=1}^{\ell}(1+tm_i\alpha\beta^{i-1})$ open intervals. Identically zero threshold polynomials contribute no roots. Since every factor's nonconstant term is at least one, $C\le2(2t\alpha)^\ell\beta^{\ell(\ell+1)/2}\prod_i m_i\le2(2t\alpha m/\ell)^\ell\beta^{\ell(\ell+1)/2}\le B$, where the penultimate inequality is AM–GM. The same partition argument applies for every fixed offset of the remaining coordinates. [step 1.2, algebra]

3.1 Put $T=2^q$. By [F1], the target threshold classifier alternates on $N=T+1$ intervals in $[0,1]$. Its two end intervals have length $1/(2T)$ and each of the others length $1/T$. The integral of $|f-1/2|$ is $1/(8T)$ on each end interval and $1/(4T)$ on each other interval. A comparator classifier with at most $C$ intervals has at most $C-1$ internal boundaries. Discard target intervals containing such a boundary. At most $C-1$ intervals are discarded; in each of the at most $C$ remaining runs the alternating target labels disagree with the constant comparator on at least half the run length minus $1/2$. Hence at least $(N-2C)/2$ target intervals disagree throughout, whenever this quantity is positive. Their contribution gives $\int_0^1|f-g|\,dz\ge\max\{0,(N-2C)/(16T)\}$. Endpoint equalities have no effect on the integral. Integrating in the other coordinates gives the displayed bound and its $B\le T/4$ consequence. [F1, step 2.1, algebra]

4.1 Write $s=t\alpha\beta$. For $\ell=1$, the bound in step 2.1 is $4sm$. For $\ell\ge2$, use $(2/\ell)^\ell\le1$, $\ell(\ell+1)/2\le\ell^2$, and $\ell\le\ell^2$ to bound it by $2(sm)^{\ell^2}$. Therefore $B\le4(sm)^{k^2}$. If $m\le2^{k/s}$ and $s2^{k/s}\le2^k$, then $B\le2^{k^3+2}=T/4$. For $s=1$ the condition is equality; for fixed $s>1$ it is equivalent to $k\ge s\log_2(s)/(s-1)$, so it eventually holds. This proves the exponential-budget assertion with all its indicated parameter cases. [step 2.1, step 3.1, algebra]

5.1 A binary decision tree with $r$ total nodes has at most $(r-1)/2$ internal branch nodes. On a fixed line each nonconstant affine test has at most one zero. A sum of at most $t$ such trees, with $r\le2^{A/t}$ and $A=k^3$, is constant away from at most $t(2^{A/t}-1)/2$ thresholds. Convexity of $u\mapsto2^u$ yields $t(2^{A/t}-1)\le2^A-1$ for $t\ge1$. Thus its threshold classifier has at most $(2^A+1)/2\le2^{A+2}=T/4$ intervals. Step 3.1 proves the tree assertion. Finally at $k=d=t=\alpha=1$, the target $h^5$ is $32$-Lipschitz; its degree-$2^{22}$ Bernstein polynomial has uniform error at most $32/(2\sqrt{2^{22}})=1/128$ by [F2]. This polynomial is one $(1,1,2^{22})$ gate, allowed by the node budget $2^{1/2^{22}}>1$, so the parameter restriction cannot be omitted. [step 3.1, F2, algebra] ∎
