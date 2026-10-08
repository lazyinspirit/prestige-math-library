---
id: lem-monomial-irreducibility-criterion
kind: lemma
title: "Mackey-Shoda irreducibility criterion for monomial representations"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - lem-monomial-induced-representations-transversal-model-properties
  - def-commensurator-unitary-character-and-monomial-induced-representation
  - thm-schurs-lemma-for-unitary-representations
  - def-strongly-continuous-unitary-representation
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 2
axiom_use: "AC is the stated hypothesis. Its exact uses are the selection of the right transversal T in the monomial model and, through the published implication AC implies DC implies Countable Choice, the Countable Choice hypothesis of the orthogonal-decomposition supplier. The orbit and stabiliser computations, and the twist construction of the normal-subgroup converse, use no further choice: the auxiliary space H_d is defined through the canonical factorization x = n t, and no representative of a coset is selected."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.F: Theorem 1.F.11 (irreducibility of monomial representations) with its complete proof, Corollary 1.F.13, and Corollary 1.F.15 with proof, printed pp. 54-56. The proof is expanded locally, and the twist operator of the normal-subgroup converse is reconstructed in the transversal model."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $G$ be a topological group, $H\le G$ an open subgroup and $\chi$ a unitary character of $H$. Assume that for every $g\in\operatorname{Comm}_G(H)\setminus H$ the restrictions of $\chi$ and of $\chi^g$ to the subgroup $H\cap g^{-1}Hg$ do not coincide, where $\chi^g(h):=\chi(ghg^{-1})$. Then $\operatorname{Ind}_H^G\chi$ is irreducible. In particular, if $H$ is open and $\operatorname{Comm}_G(H)=H$, then $\operatorname{Ind}_H^G\chi$ is irreducible for every unitary character $\chi$ of $H$; and if $N$ is an open normal subgroup and $\chi$ a unitary character of $N$, then $\operatorname{Ind}_N^G\chi$ is irreducible if and only if $\chi^g\neq\chi$ for every $g\in G\setminus N$.

## Facts & Assumptions

**Given:** AC; a topological group $G$; an open subgroup $H\le G$; a unitary character $\chi:H\to\mathbb T$; and the monomial representation $\pi=\operatorname{Ind}_H^G\chi$ in the transversal model of [[def-commensurator-unitary-character-and-monomial-induced-representation]].

[F1] AC says that every family of nonempty sets has a choice function, and it implies Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] Fix a right transversal $T$ of the left cosets of $H$ with $e\in T$. For $t\in T$ and $g\in G$ there are unique $\alpha(t,g)\in H$ and $t\cdot g\in T$ with $tg=\alpha(t,g)(t\cdot g)$, and $\pi(g)f(t)=\chi(\alpha(t,g))f(t\cdot g)$ defines a strongly continuous unitary representation of $G$ on $\ell^2(T)$ with $\pi(t^{-1})\delta_e=\delta_t$ and cyclic vector $\delta_e$; irreducibility means that no closed $\pi(G)$-invariant subspace other than $\{0\}$ and $\ell^2(T)$ exists ([[def-commensurator-unitary-character-and-monomial-induced-representation]], [[def-strongly-continuous-unitary-representation]]).

[F3] In this transversal model with a bounded map $S:\ell^2(T)\to\ell^2(T)$ that intertwines a representation $\pi$ with itself, the vector $f:=S\delta_e$ satisfies: $f$ is a scalar multiple of $\delta_e$ exactly when $S$ is a scalar operator; if $t\in T$ has infinite $H$-orbit, then $f(t)=0$; and if $f(t)\neq0$ and $t\cdot h=t$ for some $h\in H$, then $\chi(h)=\chi(tht^{-1})$ ([[lem-monomial-induced-representations-transversal-model-properties]]).

[F4] Every bounded self-intertwiner of an irreducible strongly continuous unitary representation is a scalar multiple of the identity ([[thm-schurs-lemma-for-unitary-representations]]).

[F5] Under Countable Choice, every closed linear subspace $M$ of a Hilbert space satisfies $H=M\oplus M^\perp$, so every vector has a unique decomposition $x=m+n$ with $m\in M$ and $n\in M^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

## Proof

**Proof technique:** contraposition in the transversal model, followed by the two particular clauses; the normal-subgroup converse is proved with an explicit twist intertwiner built in the same model.

**Given:** AC; the topological group $G$; the open subgroup $H$; the unitary character $\chi$; a right transversal $T$ with $e\in T$; and the representation $\pi=\operatorname{Ind}_H^G\chi$ on $\ell^2(T)$.

1.1 Assume, toward the contrapositive, that $\pi$ is not irreducible. Then there is a closed $\pi(G)$-invariant subspace $K$ with $\{0\}\neq K\neq\ell^2(T)$; let $P$ be the orthogonal projection onto $K$ supplied by the decomposition $\ell^2(T)=K\oplus K^\perp$ of [F5], so that $\|x\|^2=\|Px\|^2+\|x-Px\|^2$, $\|P\|\le1$, and $\langle Px,y\rangle=\langle Px,Py\rangle=\langle x,Py\rangle$ for all $x,y$, so $P$ is self-adjoint. Since $\pi(g)$ is unitary and $\pi(g)K\subseteq K$, also $\pi(g)(K^\perp)\subseteq K^\perp$, because $\langle\pi(g)n,\pi(g)k\rangle=\langle n,k\rangle=0$ for $n\in K^\perp$ and $k\in K$; hence $P\pi(g)=\pi(g)P$ for every $g\in G$. Since $K\neq\{0\}$ and $K\neq\ell^2(T)$, the operator $P$ is neither $0$ nor the identity and is therefore not a scalar operator. [assume-hyp, contrapositive-reduce, F1, F2, F5, construct]

2.1 Put $f:=P\delta_e\in\ell^2(T)$. By the scalar criterion of [F3] applied to the self-intertwiner $P$, the vector $f$ is not a scalar multiple of $\delta_e$; hence there is $t\in T\setminus\{e\}$ with $f(t)\neq0$. By the orbit criterion of [F3], every element of $T$ with nonzero $f$-value has finite $H$-orbit, so the $H$-orbit of $t$ is finite. [F3, step 1.1]

3.1 For $h\in H$ we have $t\cdot h=t$ exactly when $tht^{-1}=\alpha(t,h)\in H$, by the unique factorization $th=\alpha(t,h)(t\cdot h)$ of [F2]; hence the stabiliser of $t$ in $H$ is exactly $H\cap t^{-1}Ht$, and finiteness of the orbit gives $[H:H\cap t^{-1}Ht]<\infty$. Moreover $t\notin H$, because $t\in T\setminus\{e\}$ and $T$ meets the coset $H=He$ exactly in $e$. [F2, step 2.1]

4.1 Put $t^*:=e\cdot t^{-1}\in T$. The model formula of [F2] gives $\pi(t)\delta_e=\chi(\alpha(t^*,t))\delta_{t^*}$: indeed $\pi(t)\delta_e=\sum_{s\in T}\chi(\alpha(s,t))\delta_e(s\cdot t)$, and $s\cdot t=e$ holds for the unique $s\in T$ with $st\in H$, namely $s=t^*$. Since $|\chi(\alpha(t^*,t))|=1$, the vectors $P\delta_{t^*}=\chi(\alpha(t^*,t))^{-1}\pi(t)f$ and $\pi(t)f$ have equal norms; using that $P$ is self-adjoint, we get $|f(t^*)|=|\langle\delta_e,P\delta_{t^*}\rangle|=|\langle\delta_e,\pi(t)f\rangle|=|\langle\pi(t)^*\delta_e,f\rangle|=|\langle\delta_t,f\rangle|=|f(t)|\neq0$. The orbit criterion of [F3] applied to the point $t^*$ therefore shows that $t^*$ has finite $H$-orbit. [F2, F3, step 3.1]

5.1 The stabiliser of $t^*$ in $H$ is $H\cap (t^*)^{-1}Ht^*$ by the same computation as step 3.1. Since $t^*=e\cdot t^{-1}$ lies in the coset $Ht^{-1}$, there is $h_1\in H$ with $t^*=h_1t^{-1}$, so $(t^*)^{-1}Ht^*=tHt^{-1}$ and $H\cap(t^*)^{-1}Ht^*=H\cap tHt^{-1}$. Step 4.1 therefore gives $[H:H\cap tHt^{-1}]<\infty$; conjugating by $t$ gives $[t^{-1}Ht:t^{-1}Ht\cap H]<\infty$, so with step 3.1 we obtain $t\in\operatorname{Comm}_G(H)\setminus H$. [F2, step 4.1]

6.1 Let $h\in H\cap t^{-1}Ht$; then $h\in H$ and $tht^{-1}\in H$, so $t\cdot h=t$ by step 3.1, while $f(t)\neq0$. The stabiliser criterion of [F3] therefore gives $\chi(h)=\chi(tht^{-1})=\chi^t(h)$: the characters $\chi$ and $\chi^t$ coincide on $H\cap t^{-1}Ht$, although $t\in\operatorname{Comm}_G(H)\setminus H$ by step 5.1. This contradicts the hypothesis of the Statement; the contrapositive is proved, so $\operatorname{Ind}_H^G\chi$ is irreducible. [F3, step 5.1, discharge-contrapositive]

7.1 If $\operatorname{Comm}_G(H)=H$, the assumed condition is vacuous and the irreducibility just proved applies to every unitary character of $H$. If $N\trianglelefteq G$ is open, then $N\cap g^{-1}Ng=N$ has finite index in $N$ for every $g$, so $\operatorname{Comm}_G(N)=G$; the criterion therefore gives that $\operatorname{Ind}_N^G\chi$ is irreducible whenever $\chi^g\neq\chi$ for every $g\in G\setminus N$, since here $N\cap g^{-1}Ng=N$ and the restriction of $\chi^g$ to $N$ is $\chi^g$ itself. [step 6.1, algebra]

8.1 For the converse direction in the normal case, assume $\chi^{g_0}=\chi$ for some $g_0\in G\setminus N$; we shall construct a non-scalar bounded self-intertwiner of $\pi$. Every $x\in G$ has a unique factorization $x=nt$ with $n\in N$ and $t\in T$, because $G=\bigsqcup_{t\in T}Nt$. Define $H_d:=\{F:G\to\mathbb C:\ F(nt)=\chi(n)F(t)\ \text{for all }n\in N,\ t\in T,\ \text{and }\sum_{t\in T}|F(t)|^2<\infty\}$ with norm $\|F\|_d^2:=\sum_{t\in T}|F(t)|^2$, and define $\Phi:\ell^2(T)\to H_d$ by $(\Phi f)(nt):=\chi(n)f(t)$. Then $\Phi$ is a linear bijection with $\|\Phi f\|_d=\|f\|$ for all $f$, because every $F\in H_d$ is determined by its restriction to $T$. [step 7.1, F2, construct]

9.1 Define $(DF)(x):=F(g_0x)$ for $F\in H_d$. For $x=nt$ write $g_0t=m_t\tau(t)$ with $\tau(t)\in T$ and $m_t=g_0t\,\tau(t)^{-1}\in N$; then $g_0x=(g_0ng_0^{-1})m_t\,\tau(t)$ with $g_0ng_0^{-1}\in N$ by normality, so $DF$ satisfies the covariance identity of $H_d$: for $n'\in N$, $(DF)(n'x)=F(g_0n'x)=\chi(g_0n'g_0^{-1})F(g_0x)=\chi(n')(DF)(x)$, using $\chi^{g_0}=\chi$. Since $t\mapsto g_0t$ induces the bijection $Nt\mapsto Ng_0t$ of the coset space, with inverse induced by $g_0^{-1}$, the map $\tau$ is a bijection of $T$; hence $\|DF\|_d^2=\sum_{t\in T}|F(g_0t)|^2=\sum_{t\in T}|F(\tau(t))|^2=\|F\|_d^2$, and $D$ is a surjective isometry of $H_d$. [step 8.1, F2, algebra]

10.1 The operator $D$ commutes with every right translation: with $(g\cdot F)(x):=F(xg)$ we get $(g\cdot(DF))(x)=(DF)(xg)=F(g_0xg)=(g\cdot F)(g_0x)=D(g\cdot F)(x)$ for all $x\in G$. Moreover $\Phi$ intertwines the right-translation action with $\pi$, since $\Phi(\pi(g)f)(nt)=\chi(n)\chi(\alpha(t,g))f(t\cdot g)$ and $(g\cdot\Phi f)(nt)=(\Phi f)(n\,\alpha(t,g)\,(t\cdot g))=\chi(n\alpha(t,g))f(t\cdot g)$ agree by the cocycle identity of [F2]. Hence $S:=\Phi^{-1}D\Phi$ is a surjective isometry of $\ell^2(T)$ satisfying $S\pi(g)=\pi(g)S$ for every $g\in G$. [step 9.1, F2, algebra]

11.1 With $F_e:=\Phi\delta_e$, so that $F_e(nt)=\chi(n)\delta_e(t)$, we get $(S\delta_e)(e)=(DF_e)(e)=F_e(g_0)$. Writing $g_0=n_0t_0$ with $n_0\in N$, $t_0\in T$, we have $t_0\neq e$ because $g_0\notin N$, so $F_e(g_0)=\chi(n_0)\delta_e(t_0)=0\neq1=\delta_e(e)$. If $S=\lambda I$ then $\lambda=(S\delta_e)(e)=0$, contradicting that $S$ is a surjective isometry; thus $S$ is a non-scalar bounded self-intertwiner of $\pi$. By the contrapositive of Schur's lemma [F4], $\pi$ is not irreducible. This proves the converse direction, and with step 7.1 the stated equivalence for open normal subgroups follows. [F4, step 10.1, algebra] ∎

## Boundary cases

If $G=H$, then $T=\{e\}$, the representation is the one-dimensional character $\chi$, the commensurator condition is vacuous, and irreducibility holds; no $t\in T\setminus\{e\}$ exists, so the contrapositive hypothesis is never met. If $H=\{e\}$, then $\operatorname{Comm}_G(H)=G$, and the criterion reduces to the statement that the left regular representation on $\ell^2(G)$ is irreducible exactly when $G$ is trivial; this is consistent with step 6.1, because for nontrivial $G$ every $t\neq e$ has trivial stabiliser, so $\chi$ and $\chi^t$ coincide on the trivial group, the hypothesis fails, and the induced representation is the reducible left regular representation. For the normal case with $G=N$ the condition on $G\setminus N$ is vacuous. The case of a one-element orbit, $[H:H\cap t^{-1}Ht]=1$, is included in step 3.1. No endpoint parameter occurs. The Choice content is that recorded in [F1]: the transversal is chosen by AC, and Countable Choice is inherited by the orthogonal-decomposition supplier of [F5].

## Source qualifications

Bekka-de la Harpe, Theorem 1.F.11 with its proof, printed pp. 54-55, is the origin of the contrapositive argument of steps 1.1-6.1; the source invokes Lemma 1.F.10(2) and (4)-(5) for the scalar, support, and stabiliser conclusions, which is exactly the use made of [F3] here. Corollary 1.F.13 records the self-commensurating specialisation. Corollary 1.F.15 proves the normal-subgroup equivalence, but proves its converse with the covariant model rather than the transversal model; step 8.1-11.1 therefore reconstructs the twist operator inside the transversal model used on this page. The source takes the transversal as given; the construction of $T$ from AC is recorded in [[def-commensurator-unitary-character-and-monomial-induced-representation]]. The auxiliary space $H_d$ is a proof device only, and no representation-theoretic assertion is made about it.
