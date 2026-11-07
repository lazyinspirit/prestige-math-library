---
id: ex-four-term-prime-progression-as-a-finite-complexity-system
kind: example
title: "Four-term prime progressions and their singular series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-affine-linear-forms-system-and-size
  - def-finite-complexity-of-a-linear-forms-system
  - def-local-von-mangoldt-factor-beta-p
  - lem-finite-complexity-local-factors-converge
  - thm-green-tao-generalized-hardy-littlewood-finite-complexity
  - def-prime
  - def-von-mangoldt-function
  - def-natural-logarithm
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "Definition 1.5 and Example 1 for the progression forms; equations (1.4), (1.6), and the Main Theorem for the weighted asymptotic and local factors."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7, printed pp. 109–128: arithmetic progression forms, local prime biases, and the transfer theorem context."
---

## Example

For integers $N\ge4$, let $A_4(N)$ be the number of prime quadruples $p_1<p_2<p_3<p_4\le N$ in arithmetic progression. The associated affine-linear system is $\Psi(n,r)=(n,n+r,n+2r,n+3r)$, which has complexity exactly two. The generalized Hardy–Littlewood asymptotic at complexity two gives

$$
A_4(N)=\left(\mathfrak S_4+o(1)\right)\frac{N^2}{(\log N)^4},
\qquad
\mathfrak S_4:=\frac34\prod_{\substack{p\text{ prime}\\p\ge5}}\left(1-\frac{3p-1}{(p-1)^3}\right)>0.
$$

## Example references

[[def-affine-linear-forms-system-and-size]]

[[def-finite-complexity-of-a-linear-forms-system]]

[[def-local-von-mangoldt-factor-beta-p]]

[[lem-finite-complexity-local-factors-converge]]

[[thm-green-tao-generalized-hardy-littlewood-finite-complexity]]

[[def-prime]]

[[def-von-mangoldt-function]]

[[def-natural-logarithm]]

[Green and Tao, Main Theorem and Example 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

## Facts & Assumptions

**Given:** The four forms $\psi_i(n,r)=n+(i-1)r$, the prime-counting region $n\ge1$, $r\ge1$, $n+3r\le N$, and the complexity-two instance of the companion theorem.

[F1] Complexity uses rational spans of homogeneous coefficient vectors; finite complexity is at most $s$ when each target can be separated from every class in a cover of the other forms by at most $s+1$ classes. [[def-finite-complexity-of-a-linear-forms-system]]

[F2] The local factor averages $\prod_i\Lambda_p([\psi_i(a)]_p)$ over $(\mathbb Z/p\mathbb Z)^2$, with each nonzero-residue weight $p/(p-1)$. [[def-local-von-mangoldt-factor-beta-p]]

[F3] At complexity at most two, the generalized Hardy–Littlewood theorem supplies the weighted von Mangoldt asymptotic with archimedean factor equal to the positive-region volume and singular product $\prod_p\beta_p(\Psi)$. [[thm-green-tao-generalized-hardy-littlewood-finite-complexity]]

[F4] The singular product converges, and it is positive when every local factor is positive. [[lem-finite-complexity-local-factors-converge]]

[F5] A prime contributes $\log p$ to the von Mangoldt weight; a prime power $p^k$ with $k\ge2$ contributes $\log p$; all nonpositive inputs contribute zero after extension. [[def-prime]] [[def-von-mangoldt-function]]

[F6] Write $\log_2 N:=\log N/\log2$. The natural logarithm is increasing on positive reals, so $2^k\le N$ implies $k\le\log_2N$. [[def-natural-logarithm]]

## Proof

1.1 The coefficient vectors are $(1,0),(1,1),(1,2),(1,3)$. For any target, the three remaining vectors can be placed in three singleton classes, and no singleton vector is proportional to the target; hence complexity is at most two. [given, F1, algebra]

1.2 For any target, every pair among the other three vectors is linearly independent because its determinant is the difference of two distinct indices. Such a pair spans $\mathbb Q^2$ and therefore contains the target vector in its span. A cover by at most two classes puts at least two of the three remaining forms together, so the omission condition fails. Complexity is therefore not at most one, proving it is exactly two. [given, F1, algebra]

2.1 Take $K_N=\{(x,y)\in\mathbb R^2:x\ge0,\ y\ge1,\ x+3y\le N\}$. It is convex, lies in $[-N,N]^2$, and its positive-form region has area $(N-3)^2/6=N^2/6+O(N)$. The theorem in the Statement's complexity-two branch applies and gives the weighted sum $T_N=(N^2/6)\prod_p\beta_p(\Psi)+o(N^2)$. [given, F2, F3, algebra]

3.1 For $p=2$, the four forms reduce to $n,n+r,n,n+r$. All are nonzero only for $(n,r)=(1,0)$, so $\beta_2=2^{-2}\cdot2^4=4$. For $p=3$, if $r=0$ the two choices $n=1,2$ are allowed; if $r\ne0$, the residues $n,n+r,n+2r$ include zero. Hence $\beta_3=3^{-2}\cdot2\cdot(3/2)^4=9/8$. [given, F2, algebra]

3.2 For $p\ge5$, the four zero sets are distinct lines through the origin in $\mathbb F_p^2$, where $\mathbb F_p=\mathbb Z/p\mathbb Z$. Their union contains the origin and $p-1$ other points on each line, with no nonzero intersections, so exactly $p^2-1-4(p-1)=(p-1)(p-3)$ residue pairs avoid all four zero sets. Therefore $\beta_p=\frac{(p-1)(p-3)}{p^2}(\frac p{p-1})^4=\frac{p^2(p-3)}{(p-1)^3}=1-\frac{3p-1}{(p-1)^3}>0$. All local factors are positive. By [F4], the singular product converges and is positive, and step 3.1 gives $\frac16\prod_p\beta_p=\frac16\cdot4\cdot\frac98\prod_{p\ge5}(1-\frac{3p-1}{(p-1)^3})=\mathfrak S_4$. Thus $T_N=(\mathfrak S_4+o(1))N^2$. [F2, F4, step 3.1, algebra]

4.1 The number of integers at most $N$ that are prime powers $p^k$ with $k\ge2$ is at most $\sqrt N\,\log_2 N$: there are at most $\sqrt N$ possible bases and at most $\log_2N$ exponents by [F6]. For any fixed value of one form $n+ir$, at most $N$ parameter pairs in $K_N\cap\mathbb Z^2$ attain it. Since each product of four von Mangoldt weights is at most $(\log N)^4$, the contribution to $T_N$ from tuples with any prime-power coordinate of exponent at least two is $O(N^{3/2}(\log N)^5)=o(N^2)$. Hence the sum restricted to four primes is still $(\mathfrak S_4+o(1))N^2$. [F5, F6, step 2.1, algebra]

4.2 Fix $0<\varepsilon<1$. The number of lattice pairs in $K_N$ for which some form is at most $N^{1-\varepsilon}$ is $O(N^{2-\varepsilon})$: for each of the four forms, fixing $r$ leaves at most $N^{1-\varepsilon}+1$ choices of $n$, and there are at most $N$ possible $r$. Their weighted contribution is $O(N^{2-\varepsilon}(\log N)^4)=o(N^2)$, and the number of such prime quadruples is also $o(N^2/(\log N)^4)$. On the remaining prime quadruples, each logarithm lies between $(1-\varepsilon)\log N$ and $\log N$. If $A_{4,\mathrm{large}}(N)$ denotes their count and $T_{4,\mathrm{large}}(N)$ their weighted sum, then $T_{4,\mathrm{large}}(N)/(\log N)^4\le A_{4,\mathrm{large}}(N)\le T_{4,\mathrm{large}}(N)/((1-\varepsilon)^4(\log N)^4)$. By step 4.1, $T_{4,\mathrm{large}}(N)=(\mathfrak S_4+o(1))N^2$. Taking lower and upper limits after scaling by $(\log N)^4/N^2$, then letting $\varepsilon\downarrow0$, proves the stated prime-count asymptotic. [F5, step 4.1, algebra] ∎
## Source notes

The calculations above are conditional on the complexity-two generalized Hardy–Littlewood input in [F3]. The completed Möbius–nilsequence interface supplies only one prerequisite of that theorem. Its remaining full prime-pattern proof and its actual AC/CC/DC premises have not been discharged at this Example's unqualified scope; this Example therefore remains held.
