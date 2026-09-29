---
id: thm-associated-module-sheaf-exists
kind: theorem
title: The associated module sheaf exists
status: draft
origin: pipeline
deps:
  - def-associated-sheaf-module-affine-scheme
  - thm-structure-sheaf-affine-scheme
  - thm-sections-basic-open-affine-scheme
  - lem-basic-opens-quasi-compact
  - thm-localisation-of-modules-is-exact
  - def-localisation-of-a-module
  - def-affine-scheme-spectrum
  - def-sheaf-on-topological-space
  - def-axiom-of-choice
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice. Let $A$ be a commutative ring with $1$, let $M$ be
an $A$-module and put $X=\operatorname{Spec}A$ with structure sheaf
$\mathcal O_X$. Let $\mathcal B$ denote the distinguished-open data of $M$
([[def-associated-sheaf-module-affine-scheme]]): $\mathcal B(D(f))=M_f$ for
every $f\in A$, with restriction maps $\rho_{fg}:M_f\to M_g$ for
$D(g)\subseteq D(f)$.

Then:

1. $\mathcal B$ satisfies the sheaf conditions on the basis of distinguished
   opens: for every cover $D(f)=\bigcup_{i\in I}D(f_i)$ and every family
   $s_i\in M_{f_i}$ with $\rho(s_i)=\rho(s_j)$ in $M_{f_if_j}$ for all
   $i,j\in I$, there is a unique $s\in M_f$ with $\rho_{ff_i}(s)=s_i$ for all
   $i\in I$.
2. The data extend to a sheaf $\widetilde M$ of $\mathcal O_X$-modules on $X$
   with $\widetilde M(D(f))=M_f$ for every $f\in A$ and with restriction maps
   the given $\rho$; the extension is unique up to unique isomorphism
   compatible with these identifications on distinguished opens.
3. In particular $\widetilde M(D(0))=\widetilde M(\varnothing)=0$ and
   $\widetilde M(X)=M$.

The Axiom of Choice is inherited from the published sheaf-theoretic suppliers
used below; the construction of $\mathcal B$ and of the extension is
choice-free apart from finitely many existential witnesses, and no selection of
points, primes or of an infinite reindexing is made.

## Facts & Assumptions

**Given:** The Axiom of Choice; a commutative ring $A$; an $A$-module $M$; the distinguished-open data $\mathcal B(D(f))=M_f$ with restriction maps $\rho_{fg}$ for $D(g)\subseteq D(f)$.

[F1] Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] The distinguished opens form a basis of the topology of $X$ closed under finite intersections, $D(f)\cap D(g)=D(fg)$, and $D(g)\subseteq D(f)$ holds exactly when $g\in\sqrt{(f)}$ ([[def-affine-scheme-spectrum]]).

[F3] Localisation: for a multiplicative subset $S\subseteq R$ and an $R$-module $N$, the canonical map $\lambda_S:N\to S^{-1}N$ has kernel $\{\,n:s n=0\text{ for some }s\in S\,\}$; localisation is exact ([[def-localisation-of-a-module]], [[thm-localisation-of-modules-is-exact]]).

[F4] $\mathcal O_X$ is a sheaf of rings with $\mathcal O_X(D(f))=A_f$ for every $f\in A$, restriction maps the canonical localisations, and restriction maps of $\mathcal O_X$ between arbitrary opens; this is stated under the Axiom of Choice ([[thm-structure-sheaf-affine-scheme]], [[thm-sections-basic-open-affine-scheme]]).

[F5] $D(f)$ is quasi-compact for every $f\in A$, under the Axiom of Choice ([[lem-basic-opens-quasi-compact]]).

[F6] The maps $\rho_{fg}$ are the unique $A_f$-linear maps compatible with the canonical maps from $M$; they are functorial, $\rho_{ff}=\operatorname{id}$ and $\rho_{fh}=\rho_{gh}\circ\rho_{fg}$ for $D(h)\subseteq D(g)\subseteq D(f)$, and on $D(f)$ the data are modules over $A_f=\mathcal O_X(D(f))$ with the ring restriction $A_f\to A_g$ acting compatibly ([[def-associated-sheaf-module-affine-scheme]]).

[F7] A sheaf on $X$ is a presheaf with locality (a section vanishing on a cover vanishes) and unique gluing of compatible families on every open cover ([[def-sheaf-on-topological-space]]).



**Proof technique:** direct; a finitely supported partition of unity proves the exactness of the finite cover complex, and quasi-compactness reduces basis covers to finite ones.

## Proof

1.1 Let $B$ be a commutative ring, $N$ a $B$-module and $g_1,\dots,g_r\in B$ with $\sum_{i=1}^r b_i g_i=1$ for some $b_i\in B$. If $n\in N$ is such that $g_i^{e_i}n=0$ for some $e_i\ge0$ and every $i$, then $n=0$: choose $E\ge\max_i e_i$ and expand $$n=1^{rE}n=\Bigl(\sum_{i=1}^r b_i g_i\Bigr)^{rE}n=\sum_{\nu_1+\dots+\nu_r=rE}c_\nu\, b_1^{\nu_1}\cdots b_r^{\nu_r}\,g_1^{\nu_1}\cdots g_r^{\nu_r}\,n,$$ where every multi-index $\nu$ of total degree $rE$ has some $\nu_i\ge E\ge e_i$, so each summand vanishes. [F3, given, algebra]

1.2 Define a presheaf $\mathcal F$ on $X$ by letting $\mathcal F(U)$, for an open $U\subseteq X$, be the set of all families $(s_D)$ indexed by the distinguished opens $D=D(g)$ with $D\subseteq U$, with $s_D\in M_g$, such that $\rho_{gg'}(s_{D(g)})=s_{D(g')}$ whenever $D(g')\subseteq D(g)\subseteq U$; restrictions are $(s_D)\mapsto(s_D|_{D'\subseteq U'})$. This is a presheaf of abelian groups, and for every $f$ the map $M_f\to\mathcal F(D(f))$, $s\mapsto(\rho_{fg}(s))_{D(g)\subseteq D(f)}$, is a bijection with inverse $(s_D)\mapsto s_{D(f)}$: the family is compatible by [F6], the composite $(s_D)\mapsto s_{D(f)}\mapsto(\rho_{fg}(s_{D(f)}))$ is the identity by the defining compatibility, and $s=0$ is forced by the component $D(f)$. [F2, F6, given]

2.1 With $B,N,g_i$ as in step 1.1, $\sum_i b_ig_i=1$ and $r\ge1$, let elements $n_i\in N_{g_i}$ satisfy $n_i=n_j$ in $N_{g_ig_j}$ for all $i,j$. Then there is $n\in N$ with $n/1=n_i$ in $N_{g_i}$ for every $i$. Indeed, $n_i=x_i'/g_i^{k_i}$ for some $x_i'\in N$ and $k_i\ge0$; set $k:=\max_i k_i$ and $x_i:=g_i^{k-k_i}x_i'$, so that $n_i=x_i/g_i^k$ for all $i$. Compatibility of $n_i$ and $n_j$ in $N_{g_ig_j}$ provides, for each pair $(i,j)$, an exponent $m_{ij}\ge0$ with $(g_ig_j)^{m_{ij}}(g_j^kx_i-g_i^kx_j)=0$ by [F3]; put $m:=\max_{i,j}m_{ij}$ and $K:=k+m$. Choose $a_i\in B$ with $\sum_i a_ig_i^K=1$: if $K=0$, take $a_1=1$ and $a_i=0$ for $i>1$; if $K\ge1$, then $(g_1^K,\dots,g_r^K)=B$, since in the expansion of $1=(\sum_ib_ig_i)^{rK}$ every monomial of total degree $rK$ is divisible by some $g_i^K$. Set $X_i:=g_i^{K-k}x_i$, so that $n_i=X_i/g_i^K$; multiplying each witness relation by $(g_ig_j)^{m-m_{ij}}$ gives the normalised relations $g_i^KX_j=g_j^KX_i$ in $N$ for all $i,j$. Then $n:=\sum_i a_iX_i$ satisfies $g_i^Kn=\sum_j a_jg_i^KX_j=\sum_j a_jg_j^KX_i=X_i$, hence $n/1=X_i/g_i^K=n_i$ in $N_{g_i}$ for every $i$. [F3, step 1.1, given, algebra]

2.2 On each $\mathcal F(U)$ define $a\cdot(s_D):=(a|_{D}\cdot s_D)$ for $a\in\mathcal O_X(U)$, using $\mathcal O_X(U)\to\mathcal O_X(D(g))=A_g$ from [F4] and the $A_g$-module structure of $M_g$ from [F6]. This is a well-defined $\mathcal O_X(U)$-module structure: each $a|_{D}\cdot s_D$ lies in $M_g$, the families are again compatible because ring restriction and module restriction commute, the componentwise module axioms hold, and the restriction maps of $\mathcal F$ are $\mathcal O_X(U)$-linear after scalar restriction. Thus $\mathcal F$ is a presheaf of $\mathcal O_X$-modules whose sections over distinguished opens are the modules $M_f$. [F4, F6, step 1.2]

3.1 If $D(f)=\varnothing$, then $A_f=0$ and $M_f=0$, so locality and gluing hold uniquely, including for any finite family of empty opens. Assume now that $D(f)=\bigcup_{i=1}^rD(f_i)$ is a finite cover of a nonempty distinguished open, so $r\ge1$. Then the cover condition is $\sum_i c_if_i=f^{\,m}$ for some $c_i\in A$, $m\ge0$, equivalently $\sum_i b_if_i=1$ in $A_f$; set $B:=A_f$, $N:=M_f$ and $g_i:=f_i$. (a) If $s\in M_f$ has $\rho_{ff_i}(s)=0$ in every $M_{f_i}$, then $s=0$: by [F3] some $f_i^{e_i}s=0$ in $N$, so step 1.1 applies. (b) If $s_i\in M_{f_i}=N_{g_i}$ satisfy $s_i=s_j$ in $M_{f_if_j}=N_{g_ig_j}$ for all $i,j$, then there is $s\in M_f$ with $\rho_{ff_i}(s)=s_i$ for all $i$: step 2.1 applied to $N$ and $g_i$ produces such an $s$, and the identifications $N_{g_i}=M_{f_i}$ and $N_{g_ig_j}=M_{f_if_j}$ are the canonical ones because $D(f_i)\subseteq D(f)$ forces $f_i\in\sqrt{(f)}$. [F2, F3, F6, step 1.1, step 2.1]

4.1 Now let $D(f)=\bigcup_{i\in I}D(f_i)$ be an arbitrary cover by distinguished opens. Choose a finite subcover indexed by $J\subseteq I$ using [F5]. If $J=\varnothing$, then $D(f)=\varnothing$, so $M_f=0$ and every $M_{f_i}=0$; locality and gluing hold uniquely. Assume $J\ne\varnothing$. (a) If $s\in M_f$ has $\rho_{ff_i}(s)=0$ for all $i\in I$, then in particular it vanishes on the finite subcover indexed by $J$, so step 3.1(a) gives $s=0$. (b) If $s_i\in M_{f_i}$ satisfy $s_i=s_j$ in $M_{f_if_j}$ for all $i,j\in I$, then step 3.1(b) glues the family on the finite subcover to $s\in M_f$ with $\rho_{ff_{i_j}}(s)=s_{i_j}$ for $j\in J$. For any $i\in I$ with $D(f_i)\ne\varnothing$, the distinguished opens $D(f_if_{i_j})$, $j\in J$, cover $D(f_i)$ because $D(f_i)\subseteq D(f)=\bigcup_{j\in J}D(f_{i_j})$. On each such overlap, compatibility gives the same image for $s_i$ and $s_{i_j}$, while the restriction of $s$ there equals the restriction of $s_{i_j}$ by construction. Thus $s_i-\rho_{ff_i}(s)$ restricts to zero on the finite cover $D(f_i)=\bigcup_{j\in J}D(f_if_{i_j})$, and step 3.1(a) gives $s_i=\rho_{ff_i}(s)$. If $D(f_i)=\varnothing$, then $M_{f_i}=0$ and the equality also holds. Uniqueness of $s$ follows from part (a); so the distinguished-open data satisfy the sheaf conditions on the basis, proving claim 1. [F2, F5, F6, step 3.1]

5.1 $\mathcal F$ satisfies locality on every open cover. Let $U=\bigcup_{\alpha}U_\alpha$ and let $s=(s_D)\in\mathcal F(U)$ restrict to $0$ in every $\mathcal F(U_\alpha)$. Fix a distinguished open $D\subseteq U$; the $D\cap U_\alpha$ that are nonempty cover $D$ and each contains a distinguished open $D'\subseteq D\cap U_\alpha\subseteq D$ by [F2]. The restriction of $s_{D}$ to $D'$ is the $D'$-component of $s|_{U_\alpha}$, hence $0$; therefore $s_D$ vanishes in $M_{g'}$ for every such $D'$, and these $D'$ form a cover of $D$ by distinguished opens, so step 4.1(a) gives $s_D=0$; as $D$ was arbitrary, $s=0$. [F2, step 4.1, step 1.2]

6.1 $\mathcal F$ satisfies gluing. Let $U=\bigcup_\alpha U_\alpha$ and let $s_\alpha\in\mathcal F(U_\alpha)$ be compatible on overlaps $U_\alpha\cap U_\beta$. For a distinguished open $D\subseteq U$ and indices $\alpha,\beta$ with $D\cap U_\alpha$, $D\cap U_\beta$ nonempty, any two distinguished opens $D',D''\subseteq D\cap U_\alpha\cap U_\beta$ satisfy $s_{\alpha,D'}=s_{\beta,D''}$ in the common module $M_{g}$ for $D(g)\subseteq D'\cap D''$, by compatibility of $s_\alpha,s_\beta$ on $U_\alpha\cap U_\beta$; hence the elements $s_{\alpha,D'}\in M_{g'}$ glue over the basis cover of $D$ formed by all distinguished $D'\subseteq D\cap U_\alpha$, $\alpha$ varying, to a unique $s_D\in M_D$ by step 4.1(b), and this $s_D$ is independent of the choices by step 4.1(a). The resulting family $(s_D)_{D\subseteq U}$ is compatible: for $D''\subseteq D'\subseteq U$ and a common refinement $D'''\subseteq D''$ of the relevant covers, both restrictions agree with $s_{\gamma,D'''}$ for suitable $\gamma$, so step 4.1(a) applied on $D''$ gives compatibility. It restricts to each $s_\alpha$ componentwise, so with step 5.1 and [F7], $\mathcal F$ is a sheaf; it is a sheaf of $\mathcal O_X$-modules by step 2.2 and the argument of step 5.1 applied to $a\cdot s-s'$ for the componentwise action. [F7, step 4.1, step 2.2, step 5.1]

7.1 The sheaf $\mathcal F$ of steps 1.2–5.1 has $\mathcal F(D(f))=M_f$ for every $f$ by step 1.2, so it is the required extension $\widetilde M$ and proves claim 2, including $\widetilde M(D(0))=M_0=0$ because $f=0$ is nilpotent and $M_0=0$; the empty open $\varnothing=D(0)$ carries the empty family, so $\widetilde M(\varnothing)=0$, while $\widetilde M(X)=M_1=M$; this is claim 3. [step 4.1, step 1.2, step 6.1, given]

8.1 Uniqueness: let $\mathcal G$ be a sheaf of $\mathcal O_X$-modules with isomorphisms $\psi_f:\mathcal G(D(f))\to M_f$ compatible with the restrictions $\rho$, and let $\mathcal F$ be as above. For an open $U$ and $t\in\mathcal G(U)$ the family $(\psi_g(t|_{D(g)}))_{D(g)\subseteq U}$ is an element $\Phi_U(t)\in\mathcal F(U)$; the maps $\Phi_U$ are compatible with restrictions, hence form a morphism $\Phi:\mathcal G\to\mathcal F$ of sheaves of $\mathcal O_X$-modules, and on $D(f)$ the map $\Phi_{D(f)}$ is the given isomorphism $\psi_f$ by step 1.2. The map $\Phi_U$ is injective: if $\Phi_U(t)=0$ then $t|_{D(g)}=0$ for all distinguished $D(g)\subseteq U$, and these cover $U$, so $t=0$ by locality of the sheaf $\mathcal G$. It is surjective: given a family $(s_D)$, the components $s_D\in M_D=\psi_D(\mathcal G(D))$ come from unique sections $t_D\in\mathcal G(D)$ which are compatible on overlaps because the $\psi$ are compatible with restrictions, so they glue by the sheaf property of $\mathcal G$ to $t\in\mathcal G(U)$, and $\Phi_U(t)$ and $(s_D)$ have the same components. Thus each $\Phi_U$ is a bijection, the extension is unique up to unique isomorphism, and the theorem is proved; the Axiom of Choice [F1] enters only through the published suppliers [F4] and [F5], which are stated under it, and every selection made in the proof is the extraction of finitely many witnesses (a finite subcover, finitely many exponents and coefficients) rather than an arbitrary-index choice. [F1, F3, F4, F5, F7, step 4.1, step 2.2, step 6.1] ∎
