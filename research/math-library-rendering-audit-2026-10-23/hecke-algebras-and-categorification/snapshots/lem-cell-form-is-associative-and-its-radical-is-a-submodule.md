---
id: lem-cell-form-is-associative-and-its-radical-is-a-submodule
kind: lemma
title: "The cell form is associative and its radical is a submodule"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cellular-algebra-basis-and-cell-module]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Corollary 2.3, equations (2.4)-(2.6) and Proposition 2.7 with (2.8), printed pp. 9-11: the cell form, its symmetry, associativity and adjointness, and the radical submodule"
---

## Statement

Let $R$ be a commutative ring and $A$ a cellular $R$-algebra with cellular basis
$(C,\Lambda)$ and cell modules $C^{\lambda}$
([[def-cellular-algebra-basis-and-cell-module]]). For each $\lambda\in\Lambda$
there is a unique $R$-bilinear form
$$\langle\ ,\ \rangle_\lambda:C^{\lambda}\times C^{\lambda}\longrightarrow R$$
with
$$c^{\lambda}_{us}c^{\lambda}_{tv}\equiv\langle c^{\lambda}_s,c^{\lambda}_t\rangle_\lambda\,c^{\lambda}_{uv}\pmod{A^{\rhd\lambda}}$$
for all $s,t,u,v\in T(\lambda)$; in particular the scalar coefficient on the right hand side is
independent of $u$ and $v$, and $\langle c^{\lambda}_s,c^{\lambda}_t\rangle_\lambda$
depends only on $s,t$. This form is (i) symmetric,
$\langle x,y\rangle_\lambda=\langle y,x\rangle_\lambda$; (ii) associative,
$\langle xa,y\rangle_\lambda=\langle x,\,i(a)y\rangle_\lambda$ for all $a\in A$,
where $i(a)y$ denotes the right action $y\,i(a)$ of $i(a)$ on $y$, i.e. the
left action $a\cdot y:=y\,i(a)$; (iii) characterised by
$x\,c^{\lambda}_{uv}=\langle x,c^{\lambda}_u\rangle_\lambda\,c^{\lambda}_v$ for
$x\in C^{\lambda}$; and (iv) its radical
$\mathrm{rad}\,C^{\lambda}:=\{x\in C^{\lambda}:\langle x,y\rangle_\lambda=0\text{ for all }y\in C^{\lambda}\}$
is an $A$-submodule of $C^{\lambda}$, namely the kernel of
$x\mapsto\langle x,-\rangle_\lambda$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a cellular $R$-algebra $A$ with cellular basis $(C,\Lambda)$, a label $\lambda\in\Lambda$, and the cell module $C^\lambda$ with basis $\{c^{\lambda}_t:t\in T(\lambda)\}$ ([[def-cellular-algebra-basis-and-cell-module]]).

[F1] The cellular axioms and cell-module structure ([[def-cellular-algebra-basis-and-cell-module]]): $C=\{c^{\lambda}_{st}\}$ is an $R$-basis of $A$; $A^{\rhd\lambda}=\langle c^{\mu}_{uv}:\mu\rhd\lambda\rangle_R$; the $R$-linear map $i$ with $i(c^{\lambda}_{st})=c^{\lambda}_{ts}$ is an algebra anti-automorphism with $i^2=\mathrm{id}$; for all $\lambda$, $t\in T(\lambda)$, $a\in A$ there are $r_v\in R$ with $c^{\lambda}_{st}a\equiv\sum_{v}r_vc^{\lambda}_{sv}\pmod{A^{\rhd\lambda}}$ for all $s$; $C^{\lambda}$ is a right $A$-module by $c^{\lambda}_ta:=\sum_vr_vc^{\lambda}_v$ when $c^{\lambda}_{tt}a\equiv\sum_vr_vc^{\lambda}_{tv}\pmod{A^{\rhd\lambda}}$, and a left $A$-module via $i$ with $a\cdot c^{\lambda}_t:=c^{\lambda}_ti(a)$; and $A^{\unrhd\lambda}/A^{\rhd\lambda}\cong C^{\lambda}\otimes_RC^{\lambda}$ via $c^{\lambda}_{st}+A^{\rhd\lambda}\mapsto c^{\lambda}_s\otimes c^{\lambda}_t$, where $A^{\unrhd\lambda}=\langle c^{\mu}_{uv}:\mu\unrhd\lambda\rangle_R$.

## Proof

**Proof technique:** direct.

1.1 The submodules $A^{\unrhd\lambda}$ and $A^{\rhd\lambda}$ are two-sided ideals of $A$, and the following two congruence rules hold modulo $A^{\rhd\lambda}$: for all $a\in A$ and $u,v\in T(\lambda)$, $$c^{\lambda}_{us}a\equiv\sum_{w\in T(\lambda)}r_w\,c^{\lambda}_{uw},\qquad a\,c^{\lambda}_{tv}\equiv\sum_{w\in T(\lambda)}s_w\,c^{\lambda}_{wv},$$ where the $r_w$ do not depend on $u$ and the $s_w$ do not depend on $v$. Indeed, the first is the cellular rule [F1] applied to the fixed label $\lambda$, the second-slot index $s$ and the element $a$, which gives coefficients independent of the free first index $u$; right multiplication by $a$ therefore preserves each $A^{\unrhd\mu}$ and $A^{\rhd\mu}$, so $A^{\unrhd\lambda}$ and (as its span over all $\mu\rhd\lambda$) $A^{\rhd\lambda}$ are right ideals, while applying the anti-automorphism $i$ to the first rule — it swaps the two indices, fixes $R$ and preserves both spans — gives the second rule and shows that they are also left ideals. [given, F1, algebra]

2.1 Existence and uniqueness of the form: for all $s,t\in T(\lambda)$ there is a unique $r=r(s,t)\in R$ with $c^{\lambda}_{us}c^{\lambda}_{tv}\equiv r\,c^{\lambda}_{uv}\pmod{A^{\rhd\lambda}}$ for all $u,v$, and $r$ depends only on $s,t$. Since $A^{\rhd\lambda}$ is a two-sided ideal by step 1.1, the quotient ring $A/A^{\rhd\lambda}$ contains $Q:=A^{\unrhd\lambda}/A^{\rhd\lambda}$ with $R$-basis the classes $\bar c_{uv}:=c^{\lambda}_{uv}+A^{\rhd\lambda}$. Applying the two rules of step 1.1 to the product $c^{\lambda}_{us}c^{\lambda}_{tv}$ — first with $a:=c^{\lambda}_{tv}$, then with $a:=c^{\lambda}_{us}$ — gives $$\bar c_{us}\bar c_{tv}=\sum_w\rho_w\bar c_{uw}=\sum_x\sigma_x\bar c_{xv},$$ where $\rho_w$ does not depend on $u$ and $\sigma_x$ does not depend on $v$. Comparing the coefficients of $\bar c_{ab}$ in the two bases: the left expansion contributes $\rho_b$ when $a=u$ and $0$ otherwise, the right expansion $\sigma_a$ when $b=v$ and $0$ otherwise; hence $\sigma_a=0$ for $a\ne u$ and $\rho_b=0$ for $b\ne v$, leaving $\bar c_{us}\bar c_{tv}=\sigma_u\bar c_{uv}=\rho_v\bar c_{uv}$. The common value $\sigma_u=\rho_v$ is independent of $v$ (being $\sigma_u$) and independent of $u$ (being $\rho_v$), so it depends only on $s,t$; call it $\langle c^{\lambda}_s,c^{\lambda}_t\rangle_\lambda$. It is determined by the displayed congruence, because the coefficient of $\bar c_{uv}$ in the indicated free basis is unique, including over the zero ring. Bilinear extension gives the unique $R$-bilinear form with the stated property. [given, step 1.1, F1, algebra]

3.1 Symmetry: for all $s,t,u,v$, using that $i$ is an anti-automorphism with $i(c^{\lambda}_{ab})=c^{\lambda}_{ba}$, fixes $R$ and preserves $A^{\rhd\lambda}$, one has $$\langle c^{\lambda}_s,c^{\lambda}_t\rangle_\lambda\bar c_{uv}\equiv c^{\lambda}_{us}c^{\lambda}_{tv}=(c^{\lambda}_{vt}c^{\lambda}_{su})^{i}\equiv\bigl(\langle c^{\lambda}_t,c^{\lambda}_s\rangle_\lambda c^{\lambda}_{vu}\bigr)^{i}=\langle c^{\lambda}_t,c^{\lambda}_s\rangle_\lambda\bar c_{uv},$$ so $\langle c^{\lambda}_s,c^{\lambda}_t\rangle_\lambda=\langle c^{\lambda}_t,c^{\lambda}_s\rangle_\lambda$, and by bilinearity $\langle x,y\rangle_\lambda=\langle y,x\rangle_\lambda$ for all $x,y\in C^{\lambda}$. [step 2.1, F1, algebra]

3.2 Associativity: fix $s,t\in T(\lambda)$ and $a\in A$, and write $c^{\lambda}_s a=\sum_wr_wc^{\lambda}_w$ in $C^{\lambda}$ — the coefficients $r_w$ are those of step 1.1. Then, by step 2.1 applied first to $c^{\lambda}_sa$ and bilinearity of the form, $$\langle c^{\lambda}_sa,c^{\lambda}_t\rangle_\lambda\bar c_{uv}=\sum_wr_w\bar c_{uw}\bar c_{tv}=(\bar c_{us}\bar a)\cdot\bar c_{tv}=\bar c_{us}\cdot\bigl(\bar a\bar c_{tv}\bigr).$$ The second rule of step 1.1 writes $ac^{\lambda}_{tv}\equiv\sum_xs_xc^{\lambda}_{xv}\pmod{A^{\rhd\lambda}}$ with coefficients $s_x$ characterised by $c^{\lambda}_ti(a)=\sum_xs_xc^{\lambda}_x$ in $C^{\lambda}$; hence $$\bar c_{us}\cdot\bigl(\bar a\bar c_{tv}\bigr)=\sum_xs_x\bar c_{us}\bar c_{xv}=\sum_xs_x\langle c^{\lambda}_s,c^{\lambda}_x\rangle_\lambda\bar c_{uv}=\langle c^{\lambda}_s,c^{\lambda}_ti(a)\rangle_\lambda\bar c_{uv}=\langle c^{\lambda}_s,a\cdot c^{\lambda}_t\rangle_\lambda\bar c_{uv}.$$ Cancelling the basis element $\bar c_{uv}$ gives $\langle c^{\lambda}_sa,c^{\lambda}_t\rangle_\lambda=\langle c^{\lambda}_s,i(a)c^{\lambda}_t\rangle_\lambda$; by bilinearity this is $\langle xa,y\rangle_\lambda=\langle x,i(a)y\rangle_\lambda$ for all $x,y\in C^{\lambda}$. Replacing $a$ by $i(a)$ and using $i^2=\mathrm{id}$ gives the equivalent left-action form $\langle x\,i(a),y\rangle_\lambda=\langle x,\,i(a)\cdot y\rangle_\lambda$, where $i(a)\cdot y=y\,i(i(a))=y\,a$ is the left action of $i(a)$: this is the dual statement. [step 1.1, step 2.1, F1, algebra]

3.3 The adjointness identity $x\,c^{\lambda}_{uv}=\langle x,c^{\lambda}_u\rangle_\lambda c^{\lambda}_v$ holds for all $x\in C^{\lambda}$ and $u,v\in T(\lambda)$: it suffices to treat $x=c^{\lambda}_s$, and there step 2.1 with $(u,s,t,v):=(s,s,u,v)$ gives $c^{\lambda}_{ss}c^{\lambda}_{uv}\equiv\langle c^{\lambda}_s,c^{\lambda}_u\rangle_\lambda c^{\lambda}_{sv}\pmod{A^{\rhd\lambda}}$; by the definition of the right action in [F1], the coefficients of $c^{\lambda}_{sv}$ on the right are exactly the coefficients of $c^{\lambda}_v$ in $c^{\lambda}_s\cdot c^{\lambda}_{uv}$, so $c^{\lambda}_s\,c^{\lambda}_{uv}=\langle c^{\lambda}_s,c^{\lambda}_u\rangle_\lambda c^{\lambda}_v$; bilinearity in $x$ extends this to all $x$. [step 2.1, F1, algebra]

4.1 The radical is a submodule and a kernel: for fixed $y\in C^{\lambda}$ the assignment $x\mapsto\langle x,y\rangle_\lambda$ is an $R$-linear map with kernel $\{x:\langle x,y\rangle_\lambda=0\}$, so $\mathrm{rad}\,C^{\lambda}=\bigcap_y\ker(x\mapsto\langle x,y\rangle_\lambda)$ is an $R$-submodule; and if $x\in\mathrm{rad}\,C^{\lambda}$ then for every $a\in A$ and $y\in C^{\lambda}$ step 3.2 gives $\langle xa,y\rangle_\lambda=\langle x,i(a)y\rangle_\lambda=0$, so $xa\in\mathrm{rad}\,C^{\lambda}$: the radical is an $A$-submodule, namely the kernel of the $A$-module map $x\mapsto\langle x,-\rangle_\lambda$. This completes the proof of (i)-(iv). [step 3.2, step 3.3, algebra] ∎
