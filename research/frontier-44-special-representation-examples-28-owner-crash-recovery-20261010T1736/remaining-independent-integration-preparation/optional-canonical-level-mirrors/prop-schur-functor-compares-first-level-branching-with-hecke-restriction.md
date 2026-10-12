---
id: prop-schur-functor-compares-first-level-branching-with-hecke-restriction
kind: proposition
title: "The Schur functor compares first-level branching with Hecke restriction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-type-a-q-schur-algebra-and-weyl-modules,
       def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras,
       thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules,
       def-quantum-characteristic-of-an-invertible-hecke-parameter,
       prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one,
       rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels, lem-dj-bridge-murphy-cellular-basis-and-cell-form, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 13
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jonathan Brundan, Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A, Proc. London Math. Soc. (3) 77 (1998) 551-581; complete 34-page author manuscript, §5.5-5.7, printed pp. 30-32 (the Schur functors f_{n,r}, h_{n,r}, Lemma 5.6 and Lemma 5.7, and the weight comparison f_{n-1,r-1}(V^1) = f_{n,r}(V) restricted to H(r-1))"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
    - title: "Alexander Kleshchev, On decomposition numbers and branching coefficients for symmetric and special linear groups, Proc. London Math. Soc. (3) 75 (1997) 497-558; complete 66-page author manuscript, §2.12(v) and §11 (the comparison of the group restriction multiplicity with the first-level multiplicity over the algebraic group); the present item replaces the citation by a proof-bearing comparison in the q-Schur setting"
      url: "https://darkwing.uoregon.edu/~klesh/BrIV.ps"
---


## Statement

Let $F$ be a field, $q\in F^\times$, $\ell=e(F,q)$, and $n\ge r\ge1$; at the empty lower-rank boundary put $S(0,0)=H(0)=F$ with its identity functor. Use the left-module version of the q-Schur algebra $S(n,r)$ and its exact Schur functor $f_{n,r}:V\mapsto eV$ with left adjoint $h_{n,r}:X\mapsto S(n,r)e\otimes_{eS(n,r)e}X$ ([[def-type-a-q-schur-algebra-and-weyl-modules]], [[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]]). Right-module suppliers are converted to left modules through their star anti-involutions. All Specht and simple labels below are **Murphy labels**: $f(W^\mu)=S_{\mathrm M}^\mu$ and $f(L_n(\mu))=D_{\mathrm M}^\mu$, the latter nonzero exactly when $\mu$ is $\ell$-restricted ([[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]]).

For a degree-$r$ polynomial module $V=\bigoplus_{|\alpha|=r}V_\alpha$, its **first level** is $$V^1:=\bigoplus_{\alpha_n=1}V_\alpha.$$ It is a module for the Levi polynomial algebra $S(n-1,r-1)$: the first $n-1$ coordinates sum to $r-1$. It is not the sum of the weights one simple root below the highest weight. For an $\ell$-restricted partition $\lambda\vdash r$, the following hold.

1. There is a natural $H(r-1)$-module isomorphism $$f_{n-1,r-1}(L_n(\lambda)^1)\cong      \operatorname{Res}_{H(r-1)}^{H(r)}f_{n,r}(L_n(\lambda)).$$ 2. For any $S(n,r)$-modules $W,V$ with $W^{(e)}=W$ and $V_{(e)}=0$, the Schur functor induces $$\operatorname{Hom}_{S(n,r)}(W,V)\cong      \operatorname{Hom}_{H(r)}(fW,fV).$$ Here $W^{(e)}=S(n,r)eW$ is the intersection of submodules whose quotient is killed by $e$, and $V_{(e)}$ is the sum of submodules killed by $e$. 3. The socle of $L_n(\lambda)^1$ as a Levi module has only $\ell$-restricted labels.

For every partition $\mu\vdash r-1$ with $\mu$ $\ell$-restricted, $$[L_n(\lambda)^1:L_{n-1}(\mu)]  =[\operatorname{Res}D_{\mathrm M}^{\lambda}:D_{\mathrm M}^{\mu}].$$ The exact functor transfers these surviving multiplicities; it may kill nonrestricted simple factors. At $q=1$ these statements hold over every field for the group algebras. In ordinary James labels the dictionary is $D_{\mathrm M}^{\lambda}\cong D^{\lambda'}\otimes\operatorname{sgn}$, not an untwisted identification with $D^\lambda$ ([[prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one]]).

## Facts & Assumptions

**Given:** The field, parameter, ranks, polynomial weight decomposition, and q-Schur and Hecke algebras of the Statement.

[F1] The permutation-summand realization is $S(n,r)=\operatorname{End}_{H(r)}(\bigoplus_\alpha M^\alpha)$, with weight projections $1_\alpha$. The regular summand for a composition with exactly $r$ entries equal to $1$ is $M^\alpha=H(r)$. The standard corner is $\omega=(1^r,0^{n-r})$ ([[def-type-a-q-schur-algebra-and-weyl-modules]], [[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]]).

[F2] The exact Schur functor sends $W^\mu$ to $S_{\mathrm M}^\mu$ and $L_n(\mu)$ to $D_{\mathrm M}^\mu$, allowing zero images. The nonzero images have restricted labels and are pairwise nonisomorphic simple modules ([[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]]).

[F3] Brundan, full author manuscript, §3.22 defines polynomial levels by last-coordinate weight, using both $K_n$ and its binomial operators so the integer weight is determined even at a root of unity. The Levi $U(n-1)$ commutes with these operators. The q-Schur polynomial realization is the corresponding finite-degree quotient. In §5.5 the functors are left-module functors; star converts the right-module suppliers to this convention.

[F4] Every Schur simple $L(\mu)$ is its nonzero cell-form quotient, so the descended symmetric associative form makes $L(\mu)^\circ\cong L(\mu)$ under Schur star. The normalized maps are $\varphi_{ST}(x_\nu h)=m_{ST}h$, with $m_{ST}\in x_\mu H\cap Hx_\nu$ and $m_{TS}=m_{ST}^*$; Schur star is $\varphi_{ST}^*=\varphi_{TS}$ ([[def-type-a-q-schur-algebra-and-weyl-modules]]). The standard coefficient trace satisfies $\tau(ab)=\tau(ba)$ and $\tau(T_u^*T_v)=\delta_{uv}q^{\ell(u)}$; its complete generator-block proof is the actual standalone trace construction of [[lem-dj-bridge-murphy-cellular-basis-and-cell-form]] and [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]. The following proof establishes the restricted-socle conclusion locally over the original field; no quantum-hyperalgebra square-root or unproved classical-specialization premise is used.

[F5] At $q=1$ the actual ordinary polytabloid/signed-conjugate Murphy comparison gives the group module dictionary, with form factor $1$, over every field. It follows through the corrected Definition and the actual NEW50 comparison and specialization suppliers, not the printed-page-25 untwisted warning ([[prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one]]).



## Proof

**Proof technique:** direct.

1.1 Construct the lower-rank action directly over the given field. Put $M_0=\bigoplus_{\alpha\in\Lambda(n-1,r-1)}M^\alpha$ for $H(r-1)$. Length-additive parabolic coset bases give $M^{(\alpha,1)}\cong M^\alpha\otimes_{H(r-1)}H(r)$ by $x_\alpha h\otimes a\mapsto x_\alpha ha$. Thus the summands with last coordinate $1$ form $M_1\cong M_0\otimes_{H(r-1)}H(r)$. The functorial algebra homomorphism $f\mapsto f\otimes1$ embeds $S(n-1,r-1)$ into $\operatorname{End}_{H(r)}(M_1)$: the Hecke algebra $H(r)$ is free on its parabolic coset basis and contains the unit coset, so the map is injective. Extend these maps by zero to the remaining summands of $M$ and put $p=\sum_{\alpha_n=1}1_\alpha$. For every left $S(n,r)$-module $V$, $V^1=pV$ is therefore a natural $S(n-1,r-1)$-module. This supplies the lower-rank action without assuming that the first level is a sum of root-adjacent highest-weight spaces, and without adjoining a square root of the Hecke parameter. It agrees with the last-coordinate polynomial level of [F3]. [given, F1, F3]

1.2 Prove the Hom assertion algebraically. For $S=S(n,r)$ put $\overline W=Se\otimes_{eSe}eW$ and let $\varepsilon:\overline W\to W$ send $se\otimes w$ to $sw$. Its image is $SeW=W^{(e)}$, which is $W$ under the stated hypothesis. Applying $e$ identifies $e\varepsilon$ with the isomorphism $eSe\otimes_{eSe}eW\to eW$. Exactness of $e(-)$ therefore gives $eK=0$ for $K=\ker\varepsilon$. The exact sequence is $$0\longrightarrow K\longrightarrow\overline W   \xrightarrow{\varepsilon}W\longrightarrow0.$$ For any $S$-map $g:\overline W\to V$, its image $g(K)$ is an $S$-submodule killed by $e$, so it is contained in $V_{(e)}=0$. Thus $g$ factors uniquely through $W$. The adjunction then gives $\operatorname{Hom}_H(eW,eV)\cong\operatorname{Hom}_S(\overline W,V) \cong\operatorname{Hom}_S(W,V)$. This proves assertion 2, with the kernel and quotient in the correct direction. [given, F1]

2.1 Reconcile the corners for all $n\ge r$. Put $\omega_*=(1^{r-1},0^{n-r},1)$ and $e_*=1_{\omega_*}$. Both $M^\omega$ and $M^{\omega_*}$ are the regular module $H(r)$. Their fixed identity isomorphism gives block matrix units $u,v\in S(n,r)$ with $u=e_*ue$, $v=eve_*$, $uv=e_*$ and $vu=e$. Thus multiplication by $u$ gives a natural isomorphism $eV\to e_*V$, with inverse multiplication by $v$, and carries the standard regular corner action to the $e_*$ corner action. When $n=r$ these corners coincide. This explicitly supplies the natural corner identification instead of treating an idempotent with last coordinate $0$ as lying in the first level. [F1, step 1.1]

2.2 Construct a perfect Schur-contravariant form on the permutation-summand module $M$. On each distinguished coset basis $b_d=x_\alpha T_d$, put $\beta_\alpha(b_d,b_c)=\delta_{dc}q^{\ell(d)}$. The row generator cases are a same-row scalar $q$, or an adjacent length-increasing pair with $b_dT_i=b_c$ and $b_cT_i=q b_d+(q-1)b_c$, $\ell(c)=\ell(d)+1$. Their weighted diagonal matrices verify $\beta_\alpha(aT_i,b)=\beta_\alpha(a,bT_i)$, so the forms are Hecke-contravariant and perfect. To prove Schur adjointness, work first in $A=\mathbb Z[Q,Q^{-1}]$. Length-additive cosets and [F4] give $\tau(a^*b)=P_\alpha(Q)\beta_\alpha(a,b)$ on $M_\alpha$, where $P_\alpha=\sum_{u\in S_\alpha}Q^{\ell(u)}$ is nonzero in $A$ with constant coefficient $1$. For $f=\varphi_{ST}:M_\nu\to M_\mu$, $a=x_\nu h$ and $b=x_\mu k$, membership in [F4] gives $m_{TS}x_\mu=P_\mu m_{TS}$ and $x_\nu m_{TS}=P_\nu m_{TS}$. Thus $$P_\mu\beta_\mu(fa,b)=\tau(h^*m_{TS}x_\mu k)=P_\mu\tau(h^*m_{TS}k),\qquad P_\nu\beta_\nu(a,f^*b)=\tau(h^*x_\nu m_{TS}k)=P_\nu\tau(h^*m_{TS}k).$$ Cancel the nonzero polynomials only in $A$, then specialize the resulting identity to $F$. The orthogonal sum $\beta=\bigoplus_\alpha\beta_\alpha$ is therefore perfect and satisfies $\beta(sm,m')=\beta(m,s^*m')$ for every actual Schur basis map and hence every $s\in S$. It identifies the left $S$-module $M$ with $M^\circ$. No Poincare factor is canceled in the given field, including at $q=1$. [F1, F4, step 1.1, algebra]

3.1 Compute the first-level corner inside this induced action. The lower regular summand is $H(r-1)$, whose induction is $H(r-1)\otimes_{H(r-1)}H(r)=H(r)$, exactly the summand of type $\omega_*$. Its weight projection on $pV$ is $e_*$, so $f_{n-1,r-1}(V^1)=e_*V$. The lower corner operator given by left multiplication by $h\in H(r-1)$ induces left multiplication by the same $h$ on $H(r)$ under $a\otimes b\mapsto ab$. Thus every generator $T_1,\ldots,T_{r-2}$ acts exactly as its image in the upper regular corner, by equality of these explicit endomorphisms. The matrix units of step 2.1 identify the upper standard corner with this regular summand. They consequently give $f_{n-1,r-1}(V^1)\cong\operatorname{Res}f_{n,r}(V)$ on every module. This is an algebra-level calculation; it needs no generic semisimplicity or cellular/crystal label identification. [F1, step 1.1, step 2.1]

3.2 Determine the simple socle labels of $M$. Evaluation at $1$ in the regular summand gives $Se=\operatorname{Hom}_H(H,M)\cong M$ as a left $S$-module. Finite-dimensional star duality and [F4], together with step 2.2, give $$\operatorname{Hom}_S(L,M)\cong\operatorname{Hom}_S(M^\circ,L^\circ)\cong\operatorname{Hom}_S(Se,L)\cong eL$$ for every simple $L$. The last bijection evaluates a map at $e$, with inverse $v\mapsto(se\mapsto sv)$ for $v\in eL$. By [F2], $eL(\mu)$ is nonzero exactly for restricted $\mu$. Thus every simple submodule of $M$ has restricted label; for restricted $\lambda$, any nonzero map $L(\lambda)\to M$ is injective. The proof does not equate zero form quotients with zero actual module heads. [F1, F2, F4, step 2.2, algebra]


4.1 Transfer composition multiplicities by exactness, not by a Hom-space count. Apply $f_{n-1,r-1}$ to a finite composition series of $L_n(\lambda)^1$. By [F2] its factors become either zero or the pairwise nonisomorphic $D_{\mathrm M}^{\mu}$ for restricted $\mu$. Removing repeated terms of the resulting filtration therefore preserves the number of each surviving simple factor. Step 3.1 identifies its result with $\operatorname{Res}D_{\mathrm M}^{\lambda}$, proving the stated equality. Assertion 3 is not used to claim that every composition factor survives; a socle statement alone would not justify that claim. [F2, step 3.1]

4.2 Prove the restricted-socle assertion over every original field. Applying $p$ to the injection $L_n(\lambda)\to M$ of step 3.2 embeds $L_n(\lambda)^1$ into $pM=M_1=M_0\otimes_{H(r-1)}H(r)$ with the actual lower action of step 1.1. The length-additive parabolic coset basis makes $H(r)$ free as a LEFT $H(r-1)$-module of rank $r$, so $M_1$ is $r$ copies of $M_0$ as a left lower Schur module. Apply steps 2.2 and 3.2 to $M_0\cong S(n-1,r-1)e_{\rm lower}$: its simple socle labels are exactly the surviving restricted labels. Every simple submodule of $L_n(\lambda)^1$ is a simple submodule of $M_1$, and therefore restricted. At degree zero $M_0=F$, with the unique empty label; at $n=r=1$ this is the convention $S(0,0)=F$. This proves assertion3, without adjoining a square root, using a splitting extension, assuming a quantum-hyperalgebra specialization, or requiring $\lambda_n=0$. [F2, step 1.1, step 3.2, algebra]


5.1 At $q=1$, [F5] identifies the corner algebras with group algebras. In ordinary regular labels the two modules are simultaneously twisted by sign and both partition labels are conjugated. Sign restricts along the group tower, is exact, and preserves the two compared multiplicities. This is the ordinary group interpretation, including characteristic $2$; it is not an untwisted identification of a restricted label with the same regular label. Steps 3.1, 1.2, 4.2 and 4.1 prove all the assertions. [F5, step 3.1, step 1.2, step 4.2, step 4.1] ∎

## Remarks

The first-level and ordinary-label reconciliation above is the new authored binding repair. The previously accepted source20 cell-form repair and NEW50 ordinary polytabloid construction are unchanged. Actual acceptance requires the repaired current source20/NEW50 supplier carriers after the live writers drain and the same reviewer checks the actual bound interfaces. No further primitive bridge construction is claimed. No identification of cellular and crystal simple labels is used ([[rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels]]).