---
id: lem-principal-unit-power-quotient-basis-from-leading-terms
kind: lemma
title: "Principal-unit power-quotient bases from leading terms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fesenko–Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "I.5.7–5.8, I.6.3–6.5, printed pp.14–21; leading-term application in VI.5.2, pp.233–234"
verification: {}
---

## Statement

Let $p$ be odd and let $F$ be a complete discretely valued field of
characteristic zero, with normalized valuation $v$, uniformizer $\pi$,
valuation ring $\mathcal O$, and residue field $k$ of cardinality $p^f$.
Assume $e=v(p)>0$ and that $F$ contains a primitive $p^r$-th root of unity,
where $r\ge1$. Put $U_m=1+\pi^m\mathcal O$ for $m\ge1$.
Then $t=e/(p-1)$ is an integer. Set $c=pt$ and
$I=\{i:1\le i<c,\ p\nmid i\}$, and put
$\lambda=\overline{p/\pi^e}\in k^\times$ and
$\psi(x)=x^p+\lambda x$ on $k$.
The image of $\psi$ has codimension one over $\mathbb F_p$.

Choose $\theta_1,\ldots,\theta_f\in\mathcal O$ whose residues form
an $\mathbb F_p$-basis of $k$, and choose any units $g_{ij}$ satisfying
$g_{ij}\equiv1+\theta_j\pi^i\pmod{\pi^{i+1}\mathcal O}$
for $i\in I$ and $1\le j\le f$.
Choose any $b\in U_c$ such that
$\overline{(b-1)/\pi^c}\notin\psi(k)$.
Such a $b$ exists. The classes of the $ef+1$ elements $g_{ij},b$ form
a basis of the multiplicative $\mathbb Z/p^r\mathbb Z$-module
$U_1/U_1^{p^r}$. In particular,
$$
\left(\prod_{i,j}g_{ij}^{a_{ij}}\right)b^a\in F^{\times p^r}\quad\Longleftrightarrow\quad a_{ij}\equiv a\equiv0\pmod{p^r}
$$
for integer exponents, and also for $p$-adic exponents defined by limits.
These elements generate $U_1$ as a topological $\mathbb Z_p$-module.
For $b\in U_c$, the displayed condition on its leading coefficient is
equivalent to $b\notin F^{\times p}$.
The assertion concerns any specified leading-term generators; it does not
identify a formal-exponential special factor or its trace coordinate.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[Fesenko–Vostokov, I.5–6 and VI.5](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** The valuation, finite residue field, completeness, roots of unity,
and chosen leading-term generators in the Statement.

[F1] We use the abstract complete valued-field conventions only.
No global-place completion or construction of $F$ is invoked.
[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

## Proof

**Given:** The data in the Statement. A power subgroup means the image of
the indicated power map, not merely its closure.

1.1 For $m\ge1$, the map $U_m\to(k,+)$ taking $1+\pi^m a$ to $\bar a$ is surjective, has kernel $U_{m+1}$, and is a homomorphism, since the product cross term has valuation at least $2m\ge m+1$. Thus $[U_1:U_m]=p^{f(m-1)}$. The binomial expansion gives, for $a\in\mathcal O$, $(1+a\pi^m)^p\equiv1+a^p\pi^{pm}\pmod{\pi^{pm+1}}$ when $m<t$, and $(1+a\pi^m)^p\equiv1+(p/\pi^e)a\pi^{m+e}\pmod{\pi^{m+e+1}}$ when $m>t$. At an integral $m=t$ both terms occur, giving the coefficient $\bar a^p+\lambda\bar a$ at depth $c$. Indeed the intermediate binomial terms have valuations at least $e+2m$, strictly exceeding the relevant minimum of $pm$ and $m+e$. For an element of exact depth $m\ne t$, its $p$-th power therefore has exact depth $\min(pm,m+e)$. [F1, given, algebra]

2.1 Let $\xi$ be a primitive $p$-th root of unity obtained from the supplied $p^r$-th root. Its reduction is $1$, because in characteristic $p$ the polynomial $T^p-1$ is $(T-1)^p$. If $h=v(\xi-1)$ were different from $t$, the exact-depth assertion of step 1.1 would contradict $\xi^p=1$. Hence $h=t\in\mathbb Z$. Put $d=\overline{(\xi-1)/\pi^t}\ne0$. The critical binomial formula gives $d^p+\lambda d=0$, so $\psi(dy)=d^p(y^p-y)$. The kernel of $y\mapsto y^p-y$ on $k$ is exactly its prime subfield, of size $p$, as follows from the degree of this polynomial and its $p$ known roots. Thus $\ker\psi$ has size $p$; finite-dimensional linear algebra gives $|k/\psi(k)|=p$. Choose $\eta\in\mathcal O$ with residue outside $\psi(k)$; then $1+\eta\pi^c$ is an admissible $b$. Also $|I|=(pt-1)-(t-1)=(p-1)t=e$. [step 1.1, given, algebra, choose]

3.1 For every integer $m>t$, the map $u\mapsto u^p$ is a bijection $U_m\to U_{m+e}$. Injectivity follows from exact depths in step 1.1. For surjectivity, fix $y\in U_{m+e}$ and start with $x_0=1$. If $y/x_j^p\in U_{m+e+j}$, the isomorphism on leading coefficients $k\to k$, $a\mapsto\lambda a$, supplies $h_j\in U_{m+j}$ with $h_j^p\equiv y/x_j^p\pmod{U_{m+e+j+1}}$. Set $x_{j+1}=x_jh_j$. Then the residual lies in $U_{m+e+j+1}$, and $x_j$ converges by completeness to $x\in U_m$ with $x^p=y$. For definiteness, corrections can use a fixed finite list of representatives of $k$, so this iteration requires no choice for an arbitrary family. Iteration gives a bijection $U_m\to U_{m+re}$ by $p^r$-th powers. In particular $U_{c+1}=U_{t+1}^p\subset U_1^p$. [step 1.1, step 2.1, construct]

4.1 For $b\in U_c$, membership in $U_1^p$ is equivalent to its leading coefficient belonging to $\psi(k)$. If the coefficient belongs to $\psi(k)$, choose $x\in U_t$ whose $p$-th power has that coefficient by step 1.1; then $b/x^p\in U_{c+1}\subset U_1^p$. Conversely if $b=x^p$ with $x\in U_1$ and $x\ne1$, let $h$ be its exact depth. If $h<t$ its $p$-th power has depth $ph<c$, which is impossible. If $h=t$ the critical coefficient belongs to $\psi(k)$, and if $h>t$ the coefficient at depth $c$ is zero. Finally $U_1\cap F^{\times p^s}=U_1^{p^s}$ for every $s\ge1$: if $x^{p^s}\in U_1$, then $v(x)=0$ and $\bar x^{p^s}=1$ implies $\bar x=1$. This also proves the stated equivalence with $F^{\times p}$. [step 1.1, step 3.1, algebra]

4.2 The classes of $g_{ij},b$ generate $U_1/U_1^p$. To see this, successively remove the leading coefficient of a residual unit at depths $m=1,\ldots,c$. If $m<c$ and $p\nmid m$, products of $g_{mj}$ remove every coefficient, by the residue basis. If $m<c$ and $p\mid m$, then $m/p<t$ and Frobenius on the finite field $k$ is bijective. A suitable $p$-th power of an element of $U_{m/p}$ therefore removes any coefficient at depth $m$, by step 1.1. At $m=c$, products of a $p$-th power from $U_t$ and a power of $b$ remove every coefficient: $\psi(k)$ together with the nonzero class of $\overline{(b-1)/\pi^c}$ span $k$. The final residual is in $U_{c+1}\subset U_1^p$. All removed $p$-th powers are trivial in this quotient, proving generation. [step 1.1, step 2.1, step 3.1, given, construct]

5.1 Put $D=ef+1$, the number of these generators. Generation modulo $p$ implies generation modulo $p^r$ directly: write $u=G_0u_1^p$, where $G_0$ is a product of generators with exponents in $\{0,\ldots,p-1\}$; apply the same decomposition to $u_1$, and repeat $r$ times. Commutativity gives $u=G_0G_1^p\cdots G_{r-1}^{p^{r-1}}u_r^{p^r}$. Hence there is a surjection $(\mathbb Z/p^r\mathbb Z)^D\to U_1/U_1^{p^r}$. [step 4.2, construct, algebra]

6.1 Fix an integer $m>t$. The power map induces a surjection $U_1/U_m\to U_1^{p^r}/U_{m+re}$. Its kernel has size $p^r$. Indeed if $u^{p^r}\in U_{m+re}$, step 3.1 gives $v\in U_m$ with $v^{p^r}=u^{p^r}$, so $u/v\in\mu_{p^r}(F)$. Conversely every such root gives a kernel class. There are exactly $p^r$ roots in $F$, since all powers of the supplied primitive root are distinct and the polynomial has degree $p^r$. They all reduce to $1$, and no nontrivial one belongs to $U_m$, by injectivity in step 3.1. Thus their classes are distinct. Counting with step 1.1 now gives $[U_1:U_1^{p^r}]=p^{f(m+re-1)}/(p^{f(m-1)}/p^r)=p^{r(ef+1)}$. The surjection in step 5.1 is between finite sets of the same cardinality, hence is bijective. The power criterion for integer exponents follows, using step 4.1. [step 1.1, step 3.1, step 4.1, step 5.1, algebra]

7.1 For $a\in\mathbb Z_p$ and $u\in U_1$, define $u^a$ as the limit of $u^{a_N}$ for integer approximations $a_N\to a$. This is well defined: the binomial formula gives $U_h^p\subset U_{h+1}$ for every $h\ge1$, since both $ph$ and $h+e$ are at least $h+1$. Thus $U_1^{p^N}\subset U_{N+1}$ uniformly, so different approximations give the same Cauchy limit. Addition of exponents and multiplication of units commute with limits. The subgroup $U_1^{p^r}$ is open and closed because it contains $U_{m+re}$; consequently the finite quotient map is continuous. Reducing a $p$-adic exponent modulo $p^r$ therefore gives exactly its action on this quotient. This extends the criterion to $p$-adic exponents. [step 1.1, step 3.1, step 6.1, construct]

8.1 Continue the decomposition in step 5.1 indefinitely. Its finite generator-digit choices can be made by the first admissible entry of a fixed ordered finite list. To select each residual root $u_{N+1}$ without a countable-choice assumption, order a fixed finite set of residue representatives and lexicographically order the unique $\pi$-adic digit expansions in $\mathcal O$. Existence and uniqueness of these expansions follow by repeated reduction, subtraction and division by $\pi$, with completeness giving convergence. This defines a total order on $\mathcal O$; select the least member of the nonempty finite set of roots of the residual equation $T^p=u_N/G_N$. For each generator the exponents converge in $\mathbb Z_p$, while $u_N^{p^N}\in U_{N+1}$ tends uniformly to $1$. Step 7.1 permits passage to the limit, yielding an exact product of the finitely many generators to $p$-adic exponents for every $u\in U_1$. This proves topological generation, without claiming uniqueness of the full $\mathbb Z_p$ exponents. All required quotient-basis and power assertions were proved in steps 6.1–8.1. [step 5.1, step 6.1, step 7.1] ∎

## Authoring boundary

This is an uninstalled prerequisite draft. For the Shafarevich application,
one must still show that $\omega(a_0)$ has depth at least $c$ and is not a
$p$-th power when its trace is nonzero modulo $p$, and prove the complete
$p^r$ trace criterion for $\omega(a)$. None of these formal-exponential
identifications is assumed proved here.
