---
id: lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action
kind: lemma
title: Homogeneous right multiplication reconstructs the graded kernel action
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-coherently-shift-compatible-functor-and-natural-transformation, lem-internal-shift-endofunctors-and-tensor-compatibility, def-graded-ring-module-bimodule-and-internal-shift, def-bimodule, def-left-and-right-modules, def-additive-functor, def-functor-and-contravariant-functor, def-k-linear-category-and-k-linear-functor, def-vector-space, def-field, lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Roozbeh Hazrat, Graded Rings and Graded Grothendieck Groups (arXiv:1405.5071), §1.2.2 shift of modules (1.16), printed p.34; §1.2.6 graded tensor product (1.21)-(1.23), printed pp.40-41; §2.3 Definitions 2.3.3-2.3.4, Theorem 2.3.7 with its proof, Theorem 2.3.8, Example 2.3.9, printed pp.118-123"
      url: "https://arxiv.org/pdf/1405.5071"
    - title: "J. Fuchs, G. Schaumann, C. Schweigert, Eilenberg-Watts calculus for finite categories and a bimodule Radford S^4 theorem (arXiv:1612.04561v3), Introduction (classical unital-ring statement) and §2.1 Lemma 2.1"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Let $k$ be a field, $A,B$ graded $k$-algebras and
$F:\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$ $k$-linear (hence additive) and
coherently shift-compatible with comparisons $\theta$
([[def-coherently-shift-compatible-functor-and-natural-transformation]]). Put
$M:=F(A)\in\operatorname{GrMod}_0(B)$.

1. For homogeneous $a\in A_d$ the map
$$r_a:A\{d\}\longrightarrow A,\qquad r_a(x):=xa,$$
is degree-zero and $A$-linear; the prescription
$$m\cdot a:=F(r_a)\,\theta^{-1}_{A,d}(m)\qquad(m\in M,\ a\in A_d\text{ homogeneous})$$
defines a degree-zero map $M\{d\}\to M$, that is, a homogeneous right action of $A$ of degree $d$,
and extending $k$-bilinearly over $A=\bigoplus_dA_d$ makes $M$ a graded $(B,A)$-bimodule.

2. The action satisfies
$$m\cdot1=m,\qquad m\cdot(a+a')=m\cdot a+m\cdot a',\qquad (m\cdot a)\cdot b=m\cdot(ab)$$
for homogeneous $a\in A_d$, $b\in A_e$, commutes with the left $B$-action
($b(m\cdot a)=(bm)\cdot a$) and with the central $k$-scalars, and is homogeneous:
$M_gA_d\subseteq M_{g+d}$.

3. The construction uses only the shift comparisons and the functoriality, additivity and
$k$-linearity of $F$: degree-zero endomorphisms of $A$ alone would recover only $A_0$, the shifts
$A\{d\}$ are what make the homogeneous action accessible. No choice is used.

## Facts & Assumptions

**Given:** A field $k$, graded $k$-algebras $A,B$, a $k$-linear coherently shift-compatible functor
$F:\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$ with comparisons $\theta$, homogeneous
$a,a'\in A_d$, $b\in A_e$, elements $m\in M:=F(A)$ and $t,\lambda\in k$.

[L1] Coherently shift-compatible functors carry natural degree-zero isomorphisms
$\theta_{X,r}:F(X\{r\})\to F(X)\{r\}$ with $\theta_{X,0}=1$ and the cocycle
$\theta_{X,r+s}=(\theta_{X,r}\{s\})\circ\theta_{X\{r\},s}$
([[def-coherently-shift-compatible-functor-and-natural-transformation]]).

[L2] The internal shift satisfies $\{0\}=\mathrm{id}$ and $\{r\}\{s\}=\{r+s\}$ on the nose, acts as
the identity on underlying sets and vectors, so the shift of a morphism is the same underlying map,
and it preserves degreewise kernels and cokernels
([[lem-internal-shift-endofunctors-and-tensor-compatibility]]).

[L3] A graded $(B,A)$-bimodule is a $(B,A)$-bimodule that is graded as a $k$-module and homogeneous
under both actions, the two actions commuting and inducing the same $k$-action:
$\eta_B(t)m=tm=m\eta_A(t)$; a map is degree-zero when it is $A$-linear and preserves degrees
([[def-graded-ring-module-bimodule-and-internal-shift]]).

[L4] An $(S,R)$-bimodule is an abelian group that is a left $S$-module and a right $R$-module with
commuting actions ([[def-bimodule]]).

[L5] A left $R$-module satisfies $r(m+m')=rm+rm'$, $(r+r')m=rm+r'm$, $(rr')m=r(r'm)$ and $1_Rm=m$,
and symmetrically for right modules ([[def-left-and-right-modules]]).

[L6] An additive functor satisfies $F(f+g)=Ff+Fg$ for parallel morphisms
([[def-additive-functor]]).

[L7] A functor satisfies $F(1_X)=1_{F(X)}$ and $F(g\circ f)=Fg\circ Ff$
([[def-functor-and-contravariant-functor]]).

[L8] A functor between $k$-linear categories is $k$-linear when each induced map of hom-spaces is
$k$-linear, so $F(\lambda f)=\lambda F(f)$ for parallel $f$ and $\lambda\in k$
([[def-k-linear-category-and-k-linear-functor]]).

[L9] In a vector space the scalar action is additive in the vector and scalar and satisfies
$(\lambda\mu)m=\lambda(\mu m)$, $1m=m$ ([[def-vector-space]]).

[L10] A field has a commutative multiplication and distinguished $0\ne1$ ([[def-field]]).

[L11] Every field is a commutative ring with the same operations and units
([[lem-field-is-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 For homogeneous $a\in A_d$ the map $r_a(x):=xa$ sends $(A\{d\})_e=A_{e-d}$ into $A_e$ because the multiplication of the graded algebra is homogeneous, so $r_a$ is degree-zero; it is left $A$-linear because $r_a(x'x)=(x'x)a=x'(xa)=x'r_a(x)$ by associativity of $A$; here $A\{d\}$ carries the same underlying left $A$-module as $A$. [L2, L3, L5, algebra]

2.1 The composite $m\cdot a:=F(r_a)\theta^{-1}_{A,d}(m)$ is well defined: $F(r_a):F(A\{d\})\to F(A)=M$ is degree-zero $B$-linear by step 1.1 and [L3], and $\theta^{-1}_{A,d}:M\{d\}\to F(A\{d\})$ is a degree-zero $B$-linear isomorphism by [L1]; hence $m\mapsto m\cdot a$ is a degree-zero $B$-linear map $M\{d\}\to M$, so for $m\in(M\{d\})_f=M_{f-d}$ one has $m\cdot a\in M_f$, which is the homogeneity statement $M_{f-d}A_d\subseteq M_f$, and the map is additive and $k$-linear in $m$ because $B$-linear maps of graded $B$-modules are $k$-linear [L9, L11]. [step 1.1, L1, L3, L9, L11]

3.1 For homogeneous $a,a'$ of the same degree the identity $r_{a+a'}=r_a+r_{a'}$ holds pointwise, so $F(r_{a+a'})=F(r_a)+F(r_{a'})$ by additivity [L6] and $m\cdot(a+a')=m\cdot a+m\cdot a'$; for $\lambda\in k$ one has $r_{\lambda a}=\lambda r_a$ pointwise, so $F(r_{\lambda a})=\lambda F(r_a)$ by $k$-linearity [L8] and $m\cdot(\lambda a)=\lambda F(r_a)\theta^{-1}_{A,d}(m)=F(r_a)\theta^{-1}_{A,d}(\lambda m)=\lambda(m\cdot a)$, using that $\theta^{-1}$ and $F(r_a)$ are $k$-linear; hence the prescription extends by the finite homogeneous decomposition $a=\sum_da_d$ to a well-defined pairing $M\times A\to M$ that is additive and $k$-linear in each variable. [step 2.1, L1, L6, L8, L9]

3.2 Unit: $r_1=\mathrm{id}_A$ as a map $A\{0\}=A\to A$ and $\theta_{A,0}=1_{F(A)}$ by [L1], so $m\cdot1=F(\mathrm{id}_A)\theta^{-1}_{A,0}(m)=1_M(m)=m$ by [L7]. [step 2.1, L1, L2, L7]

3.3 Associativity: for homogeneous $a\in A_d$, $b\in A_e$ one has $r_{ab}=r_b\circ(r_a\{e\})$ as maps $A\{d+e\}\to A$, both sending $x$ to $xab$; hence $F(r_{ab})=F(r_b)F(r_a\{e\})$ by [L7]. The identity $\theta^{-1}_{A,e}F(r_a)\theta^{-1}_{A,d}=F(r_a\{e\})\theta^{-1}_{A,d+e}$ of underlying maps from $M$ to $F(A\{e\})$ follows from the naturality of $\theta$ at $r_a$ with parameter $e$, $\theta_{A,e}F(r_a\{e\})=(F(r_a)\{e\})\theta_{A\{d\},e}$, from the cocycle $\theta_{A,d+e}=(\theta_{A,d}\{e\})\theta_{A\{d\},e}$ and from the fact that shifting a morphism leaves the underlying map unchanged [L2], since then $(F(r_a)\{e\})(\theta_{A,d}\{e\})^{-1}=F(r_a)\theta^{-1}_{A,d}$ as functions. Substituting into $(m\cdot a)\cdot b=F(r_b)\theta^{-1}_{A,e}\bigl(F(r_a)\theta^{-1}_{A,d}(m)\bigr)$ gives $(m\cdot a)\cdot b=F(r_{ab})\theta^{-1}_{A,d+e}(m)=m\cdot(ab)$. [step 2.1, L1, L2, L6, L7, algebra]

4.1 The left $B$-action commutes with the reconstructed right action, $b(m\cdot a)=(bm)\cdot a$, because $F(r_a)$ and $\theta^{-1}_{A,d}$ are $B$-linear; the induced $k$-actions agree because for $t\in k$ one has $\eta_A(t)\in A_0$, $r_{\eta_A(t)}=t\,\mathrm{id}_A$, $\theta_{A,0}=1$ and therefore $m\cdot\eta_A(t)=F(t\,\mathrm{id}_A)(m)=t\,m$ by $k$-linearity [L8], while $\eta_B(t)m=t\,m$; steps 3.1, 3.2 and 3.3 give additivity in both variables, the unit law and associativity, so $M$ is a left $B$-module and a right $A$-module with commuting actions and common central $k$-action, homogeneous under both; by [L3, L4] $M$ is a graded $(B,A)$-bimodule. [step 2.1, step 3.1, step 3.2, step 3.3, L3, L4, L8, L9, L10, L11]

5.1 Every map used is $F$ applied to the canonical maps $r_a$, shifted by the canonical comparisons and the canonical identifications of the shift functor, so no basis, generator or element is selected and no choice is used; and the shifts are essential: a degree-zero $A$-linear endomorphism $\varphi$ of $A$ satisfies $\varphi(x)=x\varphi(1_A)$ with $\varphi(1_A)\in A_0$, so the endomorphisms of $A$ alone recover only the actions of degree $0$, whereas the maps $r_a$ with $a$ of degree $d\ne0$ have source $A\{d\}$ and enter $M$ only through the comparisons $\theta_{A,d}$. [step 4.1, L1, L2, L5, algebra] ∎
