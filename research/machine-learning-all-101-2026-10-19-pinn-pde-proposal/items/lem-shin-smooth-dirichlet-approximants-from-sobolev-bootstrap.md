---
id: lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap
kind: lemma
title: "Smooth elliptic Dirichlet solvability from a boundary Sobolev bootstrap"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-uniformly-elliptic-divergence-form-operator
  - def-wkp-zero-as-a-sobolev-closure
  - thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems
  - thm-global-h-two-dirichlet-regularity
  - lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary
  - lem-normal-second-derivative-recovered-from-the-elliptic-equation
  - thm-interior-h-k-plus-two-elliptic-regularity
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-higher-order-sobolev-embedding
  - lem-sobolev-trace-agrees-with-continuous-boundary-values
  - thm-kernel-of-the-trace-is-w-one-p-zero
  - lem-shin-elliptic-residual-stability
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Sections 4.9 and 4.11–4.12; local Fredholm and Sobolev suppliers, with higher boundary induction supplied here"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let all coefficients and data be real. Let $n\ge2$, and let $V\subset\mathbb R^n$ be nonempty and bounded with smooth boundary. Suppose $A,\beta,c,F,G$ are smooth on a neighborhood of $\bar V$, $A=A^T$, $\lambda I\le A\le\Lambda I$ for constants $0<\lambda\le\Lambda$, and $c\le0$. For $L=A:D^2+\beta\cdot D+c$, the Dirichlet problem $Lu=F$ in $V$, $u=G$ on $\partial V$ has exactly one solution $u\in C^\infty(\bar V)$. Here smoothness on the closure means that all interior derivatives extend continuously to the closure, equivalently that a smooth extension exists to every finite differentiability order.

## Statement references

[Hunter, Sections 4.9 and 4.11–4.12: Fredholm and Sobolev regularity framework](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

## Facts & Assumptions

**Given:** The dimension, smooth bounded domain, coefficient bounds, sign, forcing and lifting in the Statement. AC and CC are used through the Fredholm, extension, embedding and difference quotient suppliers.

[F1] Weak Fredholm theory for the negative-principal divergence operator gives existence for every $L^2$ forcing once its zero-boundary weak kernel is trivial ([[thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F2] A zero-trace weak solution with Lipschitz principal coefficients and $L^2$ forcing lies in global $H^2$ on a bounded $C^2$ domain; its proof uses tangential flat-face $H^2$ estimates and recovery of the normal second derivative by division by $a^{nn}$ ([[thm-global-h-two-dirichlet-regularity]], [[lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary]], [[lem-normal-second-derivative-recovered-from-the-elliptic-equation]]).

[F3] Smooth-coefficient weak solutions have the higher integer Sobolev regularity locally in the interior ([[thm-interior-h-k-plus-two-elliptic-regularity]]).

[F4] Smooth bounded domains admit integer Sobolev extensions; sufficiently high Sobolev order gives continuous classical derivatives to any prescribed finite order. On these domains the zero trace agrees with zero classical boundary values ([[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-higher-order-sobolev-embedding]], [[lem-sobolev-trace-agrees-with-continuous-boundary-values]], [[thm-kernel-of-the-trace-is-w-one-p-zero]]).

[F5] For a positive-principal uniformly elliptic operator with nonpositive potential, a zero-boundary classical homogeneous solution is zero; the exponential perturbation proves comparison on every bounded open domain ([[lem-shin-elliptic-residual-stability]]).

[F6] The zero-trace space is the $H^1$ closure of compactly supported smooth functions; it is closed, tangential translations preserve the zero flat-face trace, and the weak product rules and tangential difference quotient limits used by [F2] hold ([[def-wkp-zero-as-a-sobolev-closure]]). The choices allowed here are AC and CC ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

1.1 First establish the regularity fact needed to test the homogeneous kernel: a zero-trace weak solution with smooth coefficients and smooth forcing on a smooth bounded domain lies in $H^k(V)$ for every integer $k$. Write the negative operator as $$P=-L=-\partial_i(A_{ij}\partial_j)+(\partial_iA_{ij}-\beta_j)\partial_j-c.$$ Its principal coefficients are Lipschitz and uniformly elliptic, and its lower coefficients are bounded. Global $H^2$ regularity gives the base $u\in H^2(V)$. [given, F1, F2, F3, F4, F5, F6]

1.2 Here is the full higher-order induction, rather than an appeal to boundary smoothness. Assume $u\in H^{m+1}(V)$ for some $m\ge1$. On an interior patch, the local higher-order Sobolev theorem gives $H^{m+2}$ on a smaller patch. On a boundary patch, use a smooth graph chart and nested smooth cutoffs as in the actual global $H^2$ proof. In the flattened coordinates the cutoff solution $v$ has compact lateral support in $\overline H$, belongs to $H^{m+1}(H)$, has zero trace, and satisfies $$Pv=-a^{ij}D_iD_jv+B^iD_iv+Cv=F_0.$$ The transformed coefficients are smooth with $a^{nn}\ge\lambda'>0$, and $F_0\in H^m$ on the patch after localization; the cutoff commutators have order at most one and thus belong to $H^m$ by the induction hypothesis. A further cutoff identically one on the desired smaller patch avoids all artificial lateral boundaries. [given, F1, F2, F3, F4, F5, F6]

1.3 For every tangential multi-index $\gamma$ of order $m$, put $w=D_{\mathrm{tan}}^\gamma v$. It belongs to $H^1$ and has zero trace on the flat face. The latter follows by tangential difference quotients: every quotient of a zero-trace $H^1$ function is zero trace, and the iterated quotients converge in $H^1$ when $v\in H^{m+1}$; the trace kernel is closed. Apply the product rule in distributions to obtain $$Pw=D_{\mathrm{tan}}^\gamma F_0+\sum_{0<\eta\le\gamma}\binom\gamma\eta(D_{\mathrm{tan}}^\eta a^{ij})D_iD_jD_{\mathrm{tan}}^{\gamma-\eta}v-\sum_{0<\eta\le\gamma}\binom\gamma\eta(D_{\mathrm{tan}}^\eta B^i)D_iD_{\mathrm{tan}}^{\gamma-\eta}v-\sum_{0<\eta\le\gamma}\binom\gamma\eta(D_{\mathrm{tan}}^\eta C)D_{\mathrm{tan}}^{\gamma-\eta}v.$$ Every term is $L^2$: the largest derivative of $v$ in a commutator has order $m+1$, since $|\eta|\ge1$. Multiplying $w$ by the further cutoff adds only $L^2$ commutators, since $w\in H^1$. Convert $P$ back to divergence form and apply precisely the flat-boundary tangential $H^2$ lemma plus normal recovery (and the interior $H^2$ input) used in the global $H^2$ proof. This gives $w\in H^2$ on the smaller half-patch. Therefore all derivatives of $v$ of total order $m+2$ with at most two normal differentiations are $L^2$ there. [given, F1, F2, F3, F4, F5, F6]

1.4 Recover the remaining order-$m+2$ derivatives by induction on their number $q\ge3$ of normal differentiations. In distributions differentiate the equation by $D_n^{q-2}D_{\mathrm{tan}}^\gamma$, where $|\gamma|=m+2-q$, and isolate the term $$-a^{nn}D_n^qD_{\mathrm{tan}}^\gamma v.$$ When all $m$ derivatives fall on $v$, every other principal term has at most $q-1$ normal differentiations and is already $L^2$ by this normal-count induction. If any derivative falls on a coefficient, the derivative of $v$ has order at most $m+1$, hence is $L^2$ by the original Sobolev induction. Differentiated lower-order terms also have order at most $m+1$, and the differentiated $F_0$ is $L^2$. The reciprocal $1/a^{nn}$ is smooth and bounded on the patch. Division proves that the missing distributional derivative is represented by an $L^2$ function. There is no circular assumption of its boundary integrability: the distribution identity itself supplies the derivative, exactly as in the normal-recovery lemma. This proves $H^{m+2}$ on every smaller boundary patch. A finite cover proves $u\in H^{m+2}(V)$, completing the induction. [given, F1, F2, F3, F4, F5, F6]

1.5 For any fixed $r$, choose $k$ with $k-n/2>r+1/2$. Smooth-domain extension and the higher-order Sobolev embedding give a $C^r(\bar V)$ representative. Representatives at different $r$ coincide, since continuous representatives equal almost everywhere must agree everywhere. Thus $u\in C^\infty(\bar V)$. Its zero trace equals its zero classical boundary value. [given, F1, F2, F3, F4, F5, F6]

2.1 Now apply the weak Fredholm theorem to $P$ on $H^1_0(V)$. Every element of the homogeneous kernel has the just-proved smoothness up to the boundary. The classical comparison principle for $L$ with $c\le0$ makes that kernel zero: apply it to $u$ and $-u$. The first Fredholm alternative therefore gives a unique weak solution for every smooth forcing. For the specified boundary value, apply it to $v=u-G$ with forcing $-F-PG\in C^\infty(\bar V)$. The regularity argument makes $v$ smooth to the boundary, and $u=v+G$ solves the required problem. Uniqueness follows from the same comparison principle. This proves the lemma without a boundary Schauder theorem or continuity-method premise. [given, F1, F2, F3, F4, F5, F6] ∎

