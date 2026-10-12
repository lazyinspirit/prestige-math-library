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
       rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 12
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

Let $F$ be a field, $q\in F^\times$, $\ell=e(F,q)$, and $n\ge r\ge1$.
Use the left-module version of the q-Schur algebra $S(n,r)$ and its exact
Schur functor $f_{n,r}:V\mapsto eV$ with left adjoint
$h_{n,r}:X\mapsto S(n,r)e\otimes_{eS(n,r)e}X$
([[def-type-a-q-schur-algebra-and-weyl-modules]],
[[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]]).
Right-module suppliers are converted to left modules through their star
anti-involutions. All Specht and simple labels below are **Murphy labels**:
$f(W^\mu)=S_{\mathrm M}^\mu$ and $f(L_n(\mu))=D_{\mathrm M}^\mu$, the latter
nonzero exactly when $\mu$ is $\ell$-restricted
([[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]]).

For a degree-$r$ polynomial module $V=\bigoplus_{|\alpha|=r}V_\alpha$, its
**first level** is
$$V^1:=\bigoplus_{\alpha_n=1}V_\alpha.$$
It is a module for the Levi polynomial algebra $S(n-1,r-1)$: the first
$n-1$ coordinates sum to $r-1$. It is not the sum of the weights one simple
root below the highest weight. For an $\ell$-restricted partition
$\lambda\vdash r$, the following hold.

1. There is a natural $H(r-1)$-module isomorphism
   $$f_{n-1,r-1}(L_n(\lambda)^1)\cong
     \operatorname{Res}_{H(r-1)}^{H(r)}f_{n,r}(L_n(\lambda)).$$
2. For any $S(n,r)$-modules $W,V$ with $W^{(e)}=W$ and $V_{(e)}=0$, the
   Schur functor induces
   $$\operatorname{Hom}_{S(n,r)}(W,V)\cong
     \operatorname{Hom}_{H(r)}(fW,fV).$$
   Here $W^{(e)}=S(n,r)eW$ is the intersection of submodules whose quotient
   is killed by $e$, and $V_{(e)}$ is the sum of submodules killed by $e$.
3. The socle of $L_n(\lambda)^1$ as a Levi module has only
   $\ell$-restricted labels.

For every partition $\mu\vdash r-1$ with $\mu$ $\ell$-restricted,
$$[L_n(\lambda)^1:L_{n-1}(\mu)]
 =[\operatorname{Res}D_{\mathrm M}^{\lambda}:D_{\mathrm M}^{\mu}].$$
The exact functor transfers these surviving multiplicities; it may kill
nonrestricted simple factors. At $q=1$ these statements hold over every
field for the group algebras. In ordinary James labels the dictionary is
$D_{\mathrm M}^{\lambda}\cong D^{\lambda'}\otimes\operatorname{sgn}$,
not an untwisted identification with $D^\lambda$
([[prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one]]).

## Facts & Assumptions

**Given:** The field, parameter, ranks, polynomial weight decomposition,
and q-Schur and Hecke algebras of the Statement.

[F1] The permutation-summand realization is
$S(n,r)=\operatorname{End}_{H(r)}(\bigoplus_\alpha M^\alpha)$, with weight
projections $1_\alpha$. The regular summand for a composition with exactly
$r$ entries equal to $1$ is $M^\alpha=H(r)$. The standard corner is
$\omega=(1^r,0^{n-r})$
([[def-type-a-q-schur-algebra-and-weyl-modules]],
[[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]]).

[F2] The exact Schur functor sends $W^\mu$ to $S_{\mathrm M}^\mu$ and
$L_n(\mu)$ to $D_{\mathrm M}^\mu$, allowing zero images. The nonzero images
have restricted labels and are pairwise nonisomorphic simple modules
([[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]]).

[F3] Brundan, full author manuscript, §3.22 defines polynomial levels by
last-coordinate weight, using both $K_n$ and its binomial operators so the
integer weight is determined even at a root of unity. The Levi $U(n-1)$
commutes with these operators. The q-Schur polynomial realization is the
corresponding finite-degree quotient. In §5.5 the functors are left-module
functors; star converts the right-module suppliers to this convention.

[F4] Brundan's Theorem 5.4 identifies the Levi socle of the first level with
$\bigoplus_{i\in R^{\mathrm{good}}(\lambda)}L_{n-1}(\lambda(i))$; Lemma 5.7
proves these labels restricted when $\lambda$ is restricted. These are the
source's intrinsic good-node labels, not an identification of cellular and
crystal labels. This input is used only for assertion 3. Its full relevant
proof (§5.3-5.7, printed pp. 29-32) was consulted; a new local construction
of all lowering-operator theory in the preceding sections is not claimed.

[F5] At $q=1$ the actual ordinary polytabloid/signed-conjugate Murphy
comparison gives the group module dictionary, with form factor $1$, over
every field. It follows through the corrected Definition and the actual
NEW50 comparison and specialization suppliers, not the printed-page-25
untwisted warning
([[prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one]]).

## Proof

**Proof technique:** direct.

1.1 The first level is Levi-stable. Each polynomial weight has total degree
$r$. Levi generators change only the first $n-1$ coordinates and hence
preserve $\alpha_n$. On $V^1$ the remaining degree is $r-1$, which gives
the stated $S(n-1,r-1)$-module. Using integer weight idempotents, rather
than only the eigenvalue of $K_n$, avoids identifying different levels at
a root of unity. [given, F1, F3]

1.2 Reconcile the corners for all $n\ge r$. Put
$\omega_*=(1^{r-1},0^{n-r},1)$ and $e_*=1_{\omega_*}$. Both $M^\omega$
and $M^{\omega_*}$ are the regular module $H(r)$. Their fixed identity
isomorphism gives block matrix units $u,v\in S(n,r)$ with
$u=e_*ue$, $v=eve_*$, $uv=e_*$ and $vu=e$. Thus multiplication by $u$
gives a natural isomorphism $eV\to e_*V$, with inverse multiplication by
$v$, and carries the standard regular corner action to the $e_*$ corner
action. When $n=r$ these corners coincide. This explicitly supplies the
natural corner identification instead of treating an idempotent with last
coordinate $0$ as lying in the first level. [F1, step 1.1]

1.3 Compute the first-level corner. The weight projection of the Levi
Schur functor onto $(1^{r-1},0^{n-r})$ acts on $V^1$ as $e_*$, so
$f_{n-1,r-1}(V^1)=e_*V$. Under the regular-corner identifications the
Levi generators $T_1,\ldots,T_{r-2}$ are the same corner operators as the
first $r-2$ generators of $H(r)$: in the tensor realization, they involve
only the first $r-1$ distinct labels and leave the final label $n$ fixed.
This is an equality of operators, checked on the faithful tensor
realization of the q-Schur algebra; hence it holds on every module.
Combining this with the matrix-unit isomorphism of step 1.2 gives
$f_{n-1,r-1}(V^1)\cong\operatorname{Res}f_{n,r}(V)$. It uses neither
semisimplicity nor a simple-label comparison. [F1, F3, step 1.2]

2.1 Prove the Hom assertion algebraically. For $S=S(n,r)$ put
$\overline W=Se\otimes_{eSe}eW$ and let
$\varepsilon:\overline W\to W$ send $se\otimes w$ to $sw$. Its image is
$SeW=W^{(e)}$, which is $W$ under the stated hypothesis. Applying $e$
identifies $e\varepsilon$ with the isomorphism
$eSe\otimes_{eSe}eW\to eW$. Exactness of $e(-)$ therefore gives $eK=0$
for $K=\ker\varepsilon$. The exact sequence is
$$0\longrightarrow K\longrightarrow\overline W
  \xrightarrow{\varepsilon}W\longrightarrow0.$$
For any $S$-map $g:\overline W\to V$, its image $g(K)$ is an $S$-submodule
killed by $e$, so it is contained in $V_{(e)}=0$. Thus $g$ factors uniquely
through $W$. The adjunction then gives
$\operatorname{Hom}_H(eW,eV)\cong\operatorname{Hom}_S(\overline W,V)
\cong\operatorname{Hom}_S(W,V)$. This proves assertion 2, with the kernel
and quotient in the correct direction. [given, F1]

3.1 The restricted-socle assertion is Brundan's Lemma 5.7. By [F4] every
socle label is $\lambda(i)$ for a good row $i$. If it were not restricted
while $\lambda$ is restricted, then $i>1$ and
$\lambda_{i-1}-\lambda_i=\ell-1$. The last nodes of rows $i-1$ and $i$
then have equal residue, and the source's normality criterion forces row
$i-1$ to be normal, contradicting the minimality of the good row $i$ in
that residue. Thus all socle labels are restricted. At $\ell=\infty$ all
partitions are restricted. For the stable-rank boundary $n=r$ with
$\lambda_n>0$, necessarily $\lambda=(1^r)$: the determinant module and
its first level are one-dimensional determinant modules, and the
conclusion holds directly. [F4, step 1.1]

4.1 Transfer composition multiplicities by exactness, not by a Hom-space
count. Apply $f_{n-1,r-1}$ to a finite composition series of
$L_n(\lambda)^1$. By [F2] its factors become either zero or the
pairwise nonisomorphic $D_{\mathrm M}^{\mu}$ for restricted $\mu$.
Removing repeated terms of the resulting filtration therefore preserves
the number of each surviving simple factor. Step 1.3 identifies its
result with $\operatorname{Res}D_{\mathrm M}^{\lambda}$, proving the
stated equality. Assertion 3 is not used to claim that every composition
factor survives; a socle statement alone would not justify that claim.
[F2, step 1.3]

5.1 At $q=1$, [F5] identifies the corner algebras with group algebras.
In ordinary regular labels the two modules are simultaneously twisted by
sign and both partition labels are conjugated. Sign restricts along the
group tower, is exact, and preserves the two compared multiplicities.
This is the ordinary group interpretation, including characteristic $2$;
it is not an untwisted identification of a restricted label with the same
regular label. Steps 1.3, 2.1, 3.1 and 4.1 prove all the assertions. ∎

## Remarks

The first-level and ordinary-label reconciliation above is the new authored
binding repair. The previously accepted source20 cell-form repair and NEW50
ordinary polytabloid construction are unchanged. Actual acceptance still
requires the presently missing canonical source20/NEW50 supplier carriers;
their absence is a build-order obligation, not another theory construction.
No identification of cellular and crystal simple labels is used
([[rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels]]).
