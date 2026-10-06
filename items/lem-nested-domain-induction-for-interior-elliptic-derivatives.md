---
id: lem-nested-domain-induction-for-interior-elliptic-derivatives
kind: lemma
title: "Nested-domain induction for interior elliptic derivatives"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-local-weak-solution-for-a-divergence-form-operator, lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators, thm-interior-h-two-regularity-for-divergence-form-equations, def-sobolev-space-wkp-and-its-norm, def-hk-and-hk-zero-notation, def-uniformly-elliptic-divergence-form-operator, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, Theorem 4.28 and the remark on repeated application, printed p. 114 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 6, Theorem 1 (induction giving one derivative per step), printed pp. 60-64 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, let $k\ge0$,
let $a^{ij}\in W^{k+1,\infty}(\Omega)$, $b^i,c\in W^{k,\infty}(\Omega)$ with
bounds $|D^\ell a^{ij}|\le M_\ell$ for $|\ell|\le k+1$ and
$|D^\ell b^i|,|D^\ell c|\le M_\ell$ for $|\ell|\le k$ almost everywhere, let
$f\in H^k_{\mathrm{loc}}(\Omega)$, and let $u\in H^1(\Omega)$ be a local weak
solution of $Lu=f$ on $\Omega$
([[def-local-weak-solution-for-a-divergence-form-operator]]). Fix open sets
$\Omega_{-1},\Omega_0,\Omega_1,\dots,\Omega_{k+1}$ with
$\overline{\Omega_{-1}}\Subset\Omega$, $\overline{\Omega_0}\Subset\Omega_{-1}$
and $\overline{\Omega_{j+1}}\Subset\Omega_j$ for $0\le j\le k$. Then for every
$0\le j\le k$ one has $u\in H^{j+2}(\Omega_j)$, and there is a constant $C_j$
depending only on $n,\theta,k$, the principal-coefficient bounds through
order $j+1$, the lower-order coefficient bounds through order $j$, and the sets
$\Omega_{-1},\dots,\Omega_j$ with
$$\|u\|_{H^{j+2}(\Omega_j)}\le C_j\big(\|f\|_{H^j(\Omega_{-1})}+\|u\|_{L^2(\Omega_{-1})}\big).$$
The induction step is: each weak derivative $D^\alpha u$ of order $|\alpha|=j$
solves on $\Omega_{j-1}$ the iterated differentiated equation of
[[lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators]]
with datum in $L^2(\Omega_{j-1})$ built from $D^jf$, principal coefficient
derivatives through order $j+1$, and derivatives of $u$ of order at most
$j+1$, so the interior $H^2$ theorem applied on
$\Omega_j\Subset\Omega_{j-1}$ recovers two further derivatives; the loss of
domain is absorbed into the fixed chain. The scaffold wrote $\Omega=\Omega_0$
and concluded $u\in H^{j+2}(\Omega_0)$ at $j=0$, which would be a global
$H^2(\Omega)$ claim and is false for an arbitrary local weak solution; the
outer set $\Omega_{-1}\Subset\Omega$ is the localisation needed for the
interior estimates, and all constants below depend on it.

## Facts & Assumptions

**Given:** Countable Choice; the open set $\Omega$; the coefficients and their
bounds through order $k$; the data $f\in H^k_{\mathrm{loc}}(\Omega)$; the
local weak solution $u\in H^1(\Omega)$; and the chain
$\Omega_{-1}\Supset\Omega_0\Supset\cdots\Supset\Omega_{k+1}$ with the stated
compact inclusions.

[F1] Local weak solution: $a(u,\varphi)=\int_\Omega f\overline\varphi\,dx$
for every $\varphi\in C_c^\infty(\Omega)$.
([[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] Coefficient bounds: $a^{ij}\in W^{k+1,\infty}$, $b^i,c\in W^{k,\infty}$
with principal-coefficient bounds $M_\ell$ through order $k+1$, lower-order
coefficient bounds $M_\ell$ through order $k$, and the uniform ellipticity
constant $\theta$.
([[def-uniformly-elliptic-divergence-form-operator]],
[[def-sobolev-space-wkp-and-its-norm]])

[F3] Iterated differentiated equation: if $1\le m\le k$, $u\in H^{m+1}_{\mathrm{loc}}(\Omega)$
and $f\in H^m_{\mathrm{loc}}(\Omega)$, then for every multi-index $\alpha$ of
length $m$ the class $D^\alpha u\in H^1_{\mathrm{loc}}(\Omega)$ satisfies the compact-test
identity of a divergence-form equation with the same principal part
$a^{ij}$ whose datum $g_\alpha\in L^2_{\mathrm{loc}}(\Omega)$ is given by the
commutator formula of
[[lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators]];
it uses principal coefficient derivatives through order $m+1$, lower-order
coefficient derivatives through order $m$, and derivatives of $u$ through
order at most $m+1$. On every open set $U\subseteq\Omega$ one has
$\|g_\alpha\|_{L^2(U)}\le C_m(\|f\|_{H^m(U)}+\|u\|_{H^{m+1}(U)})$ with
$C_m$ depending only on $n,m$, the principal coefficient bounds through
order $m+1$, and lower-order coefficient bounds through order $m$. For $m=0$
the base H² estimate is [F4]. This is the iteration asserted and proved in the
differentiated-equation lemma. Named local-solution status holds on every bounded inner domain, and also on an open set $U$ whenever the derivative is in $H^1(U)$.

[F4] Interior $H^2$ theorem in nested form: if $v\in H^1(U)$ is a local weak
solution with coefficients as in [F2] on an open set $U$ and datum in
$L^2_{\mathrm{loc}}(U)$, then for all open
$U'\Subset U''\Subset U$ one has $v\in H^2(U')$ with
$\|v\|_{H^2(U')}\le C(\|{\rm datum}\|_{L^2(U'')}+\|v\|_{L^2(U'')})$, the
constant depending on $n,\theta,M_a,M_b,M_c,M_1,U',U''$.
([[thm-interior-h-two-regularity-for-divergence-form-equations]])

[F5] Restriction and nesting: for open $V\subseteq U$, every class in
$H^m(U)$ restricts to a class in $H^m(V)$ with the norm not increasing, and
$H^m(V)\subseteq H^{m'}(V)$ for $m'\le m$ with the corresponding norm
bounds; the compact inclusions of the chain are transitive.
([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]])

## Proof

**Proof technique:** induction on $j$.

1.1 The induction claim is $\mathrm P_j$: $u\in H^{j+2}(\Omega_j)$ with the bound of the Statement, for $0\le j\le k$; the chain and the coefficients are fixed as in the hypotheses, and the sets $\Omega_{-1},\dots,\Omega_{k+1}$ are nested with all compact inclusions strict. [F2, given]

2.1 Base case $j=0$. The chain gives $\Omega_0\Subset\Omega_{-1}\Subset\Omega$, so [F4] applies to $u$ on the pair $(\Omega_0,\Omega_{-1})$ (the datum $f\in L^2_{\mathrm{loc}}(\Omega)$ restricts to $L^2(\Omega_{-1})$, and the coefficient bounds $M_0,M_1$ are the ones in [F2] for $k\ge0$, the case $k=0$ reading $a^{ij}\in W^{1,\infty}$ and $b,c\in L^\infty$): $u\in H^2(\Omega_0)$ with $\|u\|_{H^2(\Omega_0)}\le C(\|f\|_{L^2(\Omega_{-1})}+\|u\|_{L^2(\Omega_{-1})})$, which is $\mathrm P_0$. [F1, F2, F4, step 1.1, base]

3.1 Induction step. Assume $\mathrm P_{j-1}$ for some $1\le j\le k$, so $u\in H^{j+1}(\Omega_{j-1})$ with $\|u\|_{H^{j+1}(\Omega_{j-1})}\le C_{j-1}(\|f\|_{H^{j-1}(\Omega_{-1})}+\|u\|_{L^2(\Omega_{-1})})$. Since $\Omega_{j-1}\subseteq\Omega_{-1}$ and $\Omega_{j-1}$ is open with $\overline{\Omega_{j-1}}\Subset\Omega$, [F5] gives $f\in H^k_{\mathrm{loc}}\Rightarrow f\in H^m(\Omega_{j-1})$ for every $m\le k$; in particular $f\in H^j(\Omega_{j-1})$ and $u\in H^{j+1}(\Omega_{j-1})\subseteq H^j(\Omega_{j-1})$. [step 2.1, F2, F5, ih]

4.1 The differentiated equation for a top derivative. Fix $\alpha$ with $|\alpha|=j$. Since $u\in H^{j+1}(\Omega_{j-1})$ and $f\in H^j(\Omega_{j-1})$, [F3] with $m=j$ and $U=\Omega_{j-1}$ makes $w:=D^\alpha u\in H^1(\Omega_{j-1})$ a local weak solution on $\Omega_{j-1}$ of an equation with the same principal part $a^{ij}$ and datum $g_\alpha\in L^2(\Omega_{j-1})$ satisfying $\|g_\alpha\|_{L^2(\Omega_{j-1})}\le C_j(\|f\|_{H^j(\Omega_{-1})}+\|u\|_{H^{j+1}(\Omega_{j-1})})\le C_j'(\|f\|_{H^j(\Omega_{-1})}+\|u\|_{L^2(\Omega_{-1})})$, the last step by the bound assumed in step 3.1; the coefficient bounds entering $C_j,C_j'$ are the principal bounds through order $j+1$ and lower-order bounds through order $j$. [step 3.1, F3, F5, algebra]

5.1 Two further derivatives. Choose an intermediate open set $V_j$ with $\overline{\Omega_j}\subset V_j\Subset\Omega_{j-1}$; such a set exists because $\overline{\Omega_j}\Subset\Omega_{j-1}$. Apply the interior $H^2$ theorem [F4] on the nested pair $\Omega_j\Subset V_j\Subset\Omega_{j-1}$ to $w=D^\alpha u$. Then $w\in H^2(\Omega_j)$ and $\|w\|_{H^2(\Omega_j)}\le C(\|g_\alpha\|_{L^2(V_j)}+\|w\|_{L^2(V_j)})$, with $C$ depending on $n,\theta$, the coefficients of $w$'s equation and the pair $(\Omega_j,V_j)$. Since $V_j\subseteq\Omega_{j-1}$, the datum and $w$ norms are bounded by those on $\Omega_{j-1}$; inserting the bound of step 4.1 gives $\|D^\alpha u\|_{H^2(\Omega_j)}\le C_j''(\|f\|_{H^j(\Omega_{-1})}+\|u\|_{L^2(\Omega_{-1})})$. [step 4.1, F4, algebra]

6.1 Completing the induction. Step 5.1 applies to every multi-index $\alpha$ with $|\alpha|=j$, and there are finitely many of them; summing the finitely many bounds gives $u\in H^{j+2}(\Omega_j)$ with $\|u\|_{H^{j+2}(\Omega_j)}\le C_j(\|f\|_{H^j(\Omega_{-1})}+\|u\|_{L^2(\Omega_{-1})})$, which is $\mathrm P_j$, with $C_j$ depending only on $n,\theta,k$, the principal bounds $M_0,\dots,M_{j+1}$, the lower-order bounds $M_0,\dots,M_j$, and the sets $\Omega_{-1},\dots,\Omega_j$. Together with the base case this proves $\mathrm P_j$ for every $0\le j\le k$. [step 3.1, step 5.1, F5, algebra]

7.1 Conclusion. For every $0\le j\le k$ the solution satisfies $u\in H^{j+2}(\Omega_j)$ with the displayed estimate; in particular the regularity is local and the domains shrink once per induction step, each step gaining exactly two derivatives by the interior $H^2$ theorem applied to the order-$j$ derivative of $u$. [step 6.1, discharge-induction] ∎

## Source notes

Hunter's Theorem 4.28 (printed p. 114) states the higher interior regularity
and refers to [9] for the detailed proof; Simon's Theorem 1 of Lecture 6
(printed pp. 60-64) is the detailed induction, gaining one derivative per
application through the difference-quotient estimate for the differentiated
equation. The present lemma packages the same induction in the library's
two-derivative-per-application form: the differentiated equation of the
companion lemma turns the order-$j$ derivative of $u$ into a weak solution
with $L^2$ datum on $\Omega_{j-1}$, to which the interior $H^2$ theorem
applies on $\Omega_j\Subset\Omega_{j-1}$. The scaffold's $\Omega=\Omega_0$
would assert a global $H^2(\Omega)$ conclusion at $j=0$; the repaired outer
set $\Omega_{-1}\Subset\Omega$ is exactly the neighbourhood that the interior
estimate needs for its datum.
