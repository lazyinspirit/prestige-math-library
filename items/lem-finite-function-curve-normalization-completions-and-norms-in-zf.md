---
id: lem-finite-function-curve-normalization-completions-and-norms-in-zf
kind: lemma
title: Finite function-curve normalizations, completions and norms without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-trace-form-is-nondegenerate-iff-separable
  - thm-field-norm-and-trace-agree-with-operator-determinant-and-trace
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - thm-chinese-remainder-theorem-for-comaximal-ideals
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF. The constant field is supplied algebraically closed; only finite field, module, chart and parameter choices are used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections2.1–2.4, local degree normalizations in model intersections; finite algebraic construction supplied here, not imported.
---

## Statement

Work in ZF. Let $k$ be algebraically closed, let $B/k$ be a normal projective integral curve with function field $K$, and let $E/K$ be any finite field extension of degree $n$, including inseparable extensions. The integral closures of the affine coordinate rings of $B$ in $E$ glue to a finite flat normal integral curve $C\to B$, with function field $E$; this curve is projective over $k$. For a closed $v\in B$, put $R=O_{B,v}$, choose a uniformizer $t$, and let $w$ run over the finitely many points of $C$ above $v$. Each $O_{C,w}$ is a DVR with residue field $k$; choose its uniformizer $u_w$ and put $e_w=\operatorname{ord}_w(t)$. Then
$$\sum_{w\mid v}e_w=n,\qquad \widehat R\cong k[[t]],\qquad \widehat{O_{C,w}}\cong k[[u_w]],$$
$$E\otimes_KK_v\cong\prod_{w\mid v}E_w,\qquad K_v=k((t)),\quad E_w=k((u_w)),\quad [E_w:K_v]=e_w.$$
The inclusions and tensor isomorphism are the ones induced by the original field inclusion. The determinant norm, with no separability restriction, satisfies
$$\operatorname{ord}_v N_{E/K}(a)=\sum_{w\mid v}\operatorname{ord}_w(a),\qquad \operatorname{ord}_v N_{E_w/K_v}(b)=\operatorname{ord}_w(b).$$
On the local field $E_w$, the unique multiplicative absolute value extending $|t|_v=e^{-1}$ is $|b|_w=\exp(-\operatorname{ord}_w(b)/e_w)$. The constructions and degree/norm identities compose in towers. No extension theorem for arbitrary valuations or arbitrary complete valued fields is needed.

## Facts & Assumptions

**Given:** The supplied algebraically closed constant field, curve and finite extension in the Statement.

[F1] The trace form of a finite separable field extension is nondegenerate. [[thm-trace-form-is-nondegenerate-iff-separable]]

[F2] Field norms and traces are determinants and traces of the finite-dimensional multiplication operators. [[thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]]

[F3] Every finitely generated torsion-free module over a PID is finite free. [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]

[F4] The Chinese remainder map for finitely many comaximal ideals is surjective with kernel their product. [[thm-chinese-remainder-theorem-for-comaximal-ideals]]

## Proof

1.1 Let $A$ be an affine coordinate ring of $B$ and $E_s$ the maximal separable subextension of $E/K$. The ring $A$ is a normal Noetherian domain. Choose a $K$-basis $b_1,\ldots,b_d$ of $E_s$ integral over $A$: start with any finite basis and multiply its entries by nonzero denominators clearing the finitely many coefficients of their monic algebraic equations. By [F1], the trace-dual lattice to $\sum_jAb_j$ is finite over $A$, as is seen by inverting the nonsingular trace Gram matrix over $K$. If $x$ is integral over $A$, then $xb_j$ is integral and its field trace belongs to $A$: its conjugates are integral, their sum is integral, and $A$ is integrally closed in $K$. Thus the integral closure $S_0$ of $A$ in $E_s$ is an $A$-submodule of that finite trace-dual lattice. Noetherianity makes it finite. [F1, F2, given, construct, algebra]

2.1 In characteristic zero, $E=E_s$ and this suffices. In characteristic $p$, there is a finite $a$ with $E^{p^a}\subseteq E_s$: for each of finitely many field generators, its minimal polynomial is a separable polynomial in a power $T^{p^b}$, and a common exponent works. Frobenius on $A$ is finite, because $k$ is perfect: for a finite algebra presentation, monomials of exponents less than $p$ in its generators span over the subring of $p$th powers. This property passes to quotients, localizations and finite-type algebras. Hence Frobenius on the finite $A$-algebra $S_0$ is finite. The ring $S_0^{1/p^a}$ inside the formal purely inseparable root field is consequently a finite $S_0$-module. If $x\in E$ is integral over $A$, then $x^{p^a}\in S_0$, so $x\in S_0^{1/p^a}$. The full integral closure $S$ is therefore an $A$-submodule of a finite $A$-module, and is finite. Roots here are unique in the purely inseparable root field, so no simultaneous root choices are used. [step 1.1, construct, algebra]

3.1 Integral closure commutes with localization in this finite setting. Indeed, from a monic equation over $A_T$, one product $q\in T$ of its finitely many denominators makes $qx$ integral over $A$, after multiplying its equation by the corresponding powers of $q$. Thus $x\in S_T$; the reverse inclusion is immediate. The finite affine normalizations therefore glue to a finite integral normal curve $C$ with function field $E$. The local ring $R=O_{B,v}$ is a DVR by the following finite ideal argument for a normal one-dimensional Noetherian local domain $T$. Choose $0\ne b\in\mathfrak m_T$, the least $r$ with $\mathfrak m_T^r\subseteq bT$, and $x\in\mathfrak m_T^{r-1}\setminus bT$. Then $z=x/b\notin T$ and $z\mathfrak m_T\subseteq T$. If $z\mathfrak m_T\subseteq\mathfrak m_T$, the determinant trick on finite generators makes $z$ integral, a contradiction. Some $y\in\mathfrak m_T$ therefore has $zy$ a unit, and $\mathfrak m_T=yT$. Its finitely generated intersection $I=\bigcap y^aT$ satisfies $I=yI$ by cancellation and hence is zero by the determinant trick. Thus every nonzero element is a power of $y$ times a unit. The integer $r$ exists because $\sqrt{bT}=\mathfrak m_T$ and this ideal is finitely generated. Over this base DVR, $S$ is torsion-free with generic localization $E$, so [F3] makes it finite free of rank $n$. The map is flat of degree $n$. [F3, step 1.1, step 2.1, construct, algebra]

4.1 The nonzero primes of $S$ over $R$ are its finitely many maximal ideals above $(t)$: after inverting $t$ there is only the field $E$, and $S/tS$ is a finite-dimensional $k$-algebra. Their residue fields are $k$. Each local ring $T=S_w$ is normal, Noetherian and of dimension one, so the finite ideal argument in step 3.1 makes it a DVR. This applies in every characteristic. Residue fields are $k$ because they are finite extensions of the algebraically closed constant field. [step 3.1, construct, algebra]

5.1 The finite map $C\to B$ is projective in the required finite-dimensional convention. Its locally free algebra $\mathcal E=f_*O_C$ gives a closed immersion $C\to\mathbb P_B(\mathcal E)$ by evaluation. Locally choose an algebra basis including $1$; the homogenized multiplication equations $X_iX_j=X_0\sum_kc_{ij}^kX_k$ and the equations for the unit describe this immersion. At $X_0=0$ they force every $X_i^2=0$, so there is no projective point at infinity. Twisting $\mathcal E$ by a sufficiently large power of the fixed very ample bundle of $B$ makes it finitely globally generated: choose finite frame generators on the standard affine charts, clear their finitely many transition denominators by powers of the chart coordinate, and glue by generic agreement. This is the same finite denominator argument for a vector bundle as for a line bundle. A resulting surjection $O_B^N\to\mathcal E(m)$ embeds $\mathbb P_B(\mathcal E)=\mathbb P_B(\mathcal E(m))$ into $\mathbb P_B^{N-1}$. Composing with the projective embedding of $B$ and the Segre map proves projectivity over $k$. [step 3.1, step 4.1, construct, algebra]

6.1 In $S_w$ write $t=u_w^{e_w}v_w$ with $v_w$ a unit. Since the residue field is the supplied subfield $k$, successive subtraction of the unique leading coefficient identifies its completion with $k[[u_w]]$, and similarly $\widehat R=k[[t]]$. Applying [F4] to the finite-dimensional local factors of $S/t^jS$, and then taking the prescribed inverse limits, gives
$$S\otimes_R\widehat R\cong\prod_{w\mid v}\widehat{S_w}.$$
Here completion commutes with the finite free module $S$ coordinatewise; the $t$-power and $u_w$-power filtrations are cofinal. Each factor is a finite projective, hence free, $\widehat R$-module. Its rank equals the dimension of its reduction modulo $t$, which is $\dim_k k[[u_w]]/(u_w^{e_w})=e_w$. The sum of these ranks is $n$. Inverting $t$ proves the stated tensor-field decomposition and local degrees. [F3, F4, step 3.1, step 4.1, algebra]

7.1 For $0\ne b\in k[[u_w]]$, multiplication by $b$ on its finite free $k[[t]]$-module has cokernel of $k$-dimension $\operatorname{ord}_w(b)$. Finite row and column elimination over the DVR, choosing an entry of least valuation at each step, diagonalizes this matrix and shows that this dimension is the $t$-valuation of its determinant. By [F2] this determinant is the field norm. Multiplying an arbitrary nonzero element of $E_w$ by a large enough power of $t$ reduces it to this case, and determinant multiplicativity gives the formula for all of $E_w^\times$. The norm on a product algebra is the product of these determinants. Base change of a finite multiplication matrix therefore gives the global local-norm identity and the valuation sum in the Statement. [F2, step 6.1, algebra]

8.1 Any absolute value extending that of $K_v$ is non-Archimedean: integers have absolute value at most $1$, and the finite binomial expansion gives $|a+b|\le(N+1)^{1/N}\max(|a|,|b|)$ for every positive $N$; let $N$ tend to infinity. Such an absolute value on $E_w$ is at most $1$ on $k[[u_w]]$: each element is integral over $k[[t]]$, and a monic equation with coefficients of absolute value at most $1$ excludes an absolute value greater than $1$. For a unit, apply the same argument to its inverse to get absolute value exactly $1$. Thus $t=u_w^{e_w}v_w$ forces $|u_w|=e^{-1/e_w}$, determining the absolute value on every $u_w^a$ times a unit. This constructs and proves uniqueness of the claimed norm without a general valuation-extension theorem. In a tower of these finite normalizations, local uniformizer orders multiply, and the finite field degrees multiply; applying the already proved fiber-rank identity over a point of the intermediate normal curve gives the corresponding sums of ramification indices. Determinants of multiplication, or their finite block matrices in a tower basis, give norm transitivity and compatibility. All products and local parameter choices concern finite fibers; series coefficients are uniquely determined recursively. [F2, step 4.1, step 6.1, step 7.1, algebra] ∎
