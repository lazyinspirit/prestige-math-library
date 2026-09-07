---
id: "thm-gallagher-correspondence-for-an-extendible-character"
kind: "theorem"
title: "Gallagher correspondence for an extendible type"
status: published
origin: "pipeline"
deps: ["def-extension-of-an-irreducible-normal-subgroup-representation", "lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces", "thm-clifford-correspondence", "def-clifford-ramification-index", "prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient", "thm-characters-of-direct-sums-tensor-products-and-duals", "lem-normal-restriction-constituents-form-one-conjugacy-orbit"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.3 p.2; tom Dieck Remark 4.2.5 p.57; Losev Corollary 2.16 and Proposition 2.17"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory, Remark 4.2.5, p.57"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
    - title: "Ivan Losev, Representation Theory, Chapter 0. Basics, Corollary 2.16 and Proposition 2.17, p.11"
      url: "https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $I=I_G(\theta)$. Assume that a representation $S$ affording $\theta$ has a fixed extension $\widetilde S$ to $I$. Then
$$ \operatorname{Irr}(I/N)\longrightarrow\operatorname{Irr}(I\mid\theta),\qquad \eta\longmapsto\chi_{\widetilde S}\operatorname{Inf}_{I/N}^I\eta $$
is a bijection. Composing it with induction to $G$ gives a bijection onto $\operatorname{Irr}(G\mid\theta)$, and the corresponding $G$-character has ramification index $\eta(1)$ over $\theta$.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] An extension retains the space and the given $N$-action, is an actual group representation, and is automatically irreducible. ([[def-extension-of-an-irreducible-normal-subgroup-representation]]).

[F2] For a finite $\theta$-isotypical $N$-module $U$, evaluation $S\otimes\operatorname{Hom}_N(S,U)\to U$ is an isomorphism; submodules correspond to unique multiplicity subspaces, and maps to linear maps of those spaces. ([[lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces]]).

[F3] An action with $N$ in its kernel descends uniquely to $I/N$, preserving irreducibility in both directions. ([[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]).

[F4] An irreducible inertia module lying over its invariant type $\theta$ restricts to copies of that type, by the one-orbit restriction result applied to $I$. ([[lem-normal-restriction-constituents-form-one-conjugacy-orbit]]).

[F5] Induction bijects the irreducible inertia modules above $\theta$ with the irreducible $G$-modules above $\theta$, with inverse the $\theta$-component. ([[thm-clifford-correspondence]]).

[F6] Ramification is the dimension of $\operatorname{Hom}_N(S,V)$, equivalently the multiplicity of $\theta$. ([[def-clifford-ramification-index]]).

[F7] The character of a tensor product of finite-dimensional complex representations of a finite group is the product of the characters. ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

## Proof

**Proof technique:** direct.

1.1 Write $\rho(i)$ for the fixed extension on $S$. For any $\theta$-isotypical $I$-module $U$, put $M=\operatorname{Hom}_N(S,U)$ and define $(i\cdot f)(s)=i\cdot f(\rho(i)^{-1}s)$. For $n\in N$, one has $\rho(i)^{-1}\rho(n)=\rho(i^{-1}ni)\rho(i)^{-1}$, so $(i\cdot f)(\rho(n)s)=n\cdot(i\cdot f)(s)$. Thus the formula stays in $M$. [F1, given, algebra]

2.1 The action law holds because $i\cdot(j\cdot f)(s)=ij\cdot f(\rho(j)^{-1}\rho(i)^{-1}s)=((ij)\cdot f)(s)$, and the identity acts identically. For $n\in N$, $n\cdot f(\rho(n)^{-1}s)=f(s)$ by $N$-linearity. Hence $N$ acts trivially on $M$ and this is a representation of $I/N$. [F3, step 1.1, algebra]

3.1 The evaluation isomorphism is $I$-equivariant for the diagonal action on $S\otimes M$: $E_U(\rho(i)s\otimes(i\cdot f))=i\cdot f(s)$. Every $N$-submodule is $E_U(S\otimes M_0)$ for a unique $M_0\subseteq M$. Since $\rho(i)$ is invertible, its translate is $E_U(S\otimes iM_0)$. Uniqueness shows that this submodule is $I$-stable exactly when $M_0$ is stable under $I/N$. For nonzero $U$, the multiplicity space is nonzero, so $U$ is irreducible if and only if $M$ is irreducible. [F2, step 2.1, algebra]

4.1 Conversely start with a quotient module $M$ and form $\widetilde S\otimes\operatorname{Inf}M$. The map $m\mapsto f_m$, where $f_m(s)=s\otimes m$, is an isomorphism $M\to\operatorname{Hom}_N(S,\widetilde S\otimes M)$ by the evaluation lemma and scalar-coordinate identification. The action constructed above satisfies $i\cdot f_m=f_{im}$. Therefore this recovers the quotient module, and step 3.1 proves irreducibility for every irreducible parameter. An isomorphism of $I$-modules induces an isomorphism of their Hom spaces by composition, respecting the quotient action; thus distinct quotient parameters cannot give isomorphic $I$-modules. [F2, step 1.1, step 3.1]

5.1 Every irreducible $I$-module above $\theta$ is $\theta$-isotypical, so steps 1.1–3.1 apply and its evaluation isomorphism supplies the required tensor form. This proves exhaustivity as well as injectivity. Taking tensor-product characters yields the stated character map. [F4, F7, step 3.1, step 4.1]

6.1 Clifford correspondence now supplies the bijection after induction. Its inverse identifies the $\theta$-component with the inducing tensor module, whose restriction to $N$ is $\dim M=\eta(1)$ copies of $S$. Thus its ramification index is $\eta(1)$. If $I=N$, the quotient is trivial and only $S$ occurs; if $I=G$, induction is identity. An extension was assumed throughout, not obtained merely from invariance. [F5, F6, step 5.1, algebra] ∎
