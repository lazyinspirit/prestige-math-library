---
id: lem-em-gauge-wave-reachability
kind: lemma
title: "Gauge reachability of Lorenz gauge by the free-space wave solution, with field invariance"
status: draft
origin: pipeline
domain: mathematics
deps: [thm-em-wave-cauchy-kirchhoff, def-em-potential-gauge-and-field-conventions, def-countable-choice, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-divergence-and-curl-of-a-c1-vector-field, def-laplacian-of-a-c2-function, def-wave-equation-cauchy-data-and-wave-speed, def-directional-and-partial-derivatives, thm-the-curl-of-a-gradient-vanishes, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, thm-algebra-of-total-derivatives, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]
dependency_roles:
  thm-em-wave-cauchy-kirchhoff: mathematical-premise
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-wave-equation-cauchy-data-and-wave-speed: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing)"
      url: "https://www.damtp.cam.ac.uk/user/tong/em/electro.pdf"
      locator: "section 6.1, printed pp. 134-135: the gauge transformation, the reduction partial_mu A'^mu = partial_mu A^mu + Box chi, and the claim that the Lorenz condition can be arranged by a gauge function solving Box chi = f"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "section 7.1, printed pp. 167-170, Corollary 7.3 and (7.11)-(7.12): existence and smoothness of the solution of u_tt = c^2 Delta u + f with prescribed Cauchy data on a slab, the supplier of the gauge function chi via W chi = G"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), carried through [[thm-em-wave-cauchy-kirchhoff]] and its sphere integrations ([[def-countable-choice]]). Let $c>0$, $t_0<T$, and let $(\varphi,A)$ be a potential pair of class $C^\infty$ on the slab $Q:=\mathbb R^3\times[t_0,T]$ in the extension sense of [[def-em-potential-gauge-and-field-conventions]]: $\varphi$ and $A$ are restrictions of $C^\infty$ functions on $\mathbb R^3\times J$ for some open interval $J\supset[t_0,T]$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Put $G:=G(\varphi,A)=\operatorname{div}A+c^{-2}\partial_t\varphi$ and $W=c^{-2}\partial_t^2-\Delta$. Then:

(a) there is a gauge function $\chi:\mathbb R^3\times[t_0,T]\to\mathbb R$ of class $C^\infty$ in the extension sense with $\chi(\cdot,t_0)=0$, $\partial_t\chi(\cdot,t_0)=0$ and $W\chi=G$ on $\mathbb R^3\times(t_0,T)$;

(b) the gauge-transformed pair $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,\,A+\nabla\chi)$ is again of class $C^\infty$ in the extension sense and its fields are unchanged:

$$E(T_\chi(\varphi,A))=E(\varphi,A),\qquad B(T_\chi(\varphi,A))=B(\varphi,A)\qquad\text{on }Q;$$

(c) the transformed pair is in Lorenz gauge: $G(T_\chi(\varphi,A))=G-W\chi=0$ on $\mathbb R^3\times(t_0,T)$;

(d) if $\chi_1,\chi_2$ are of class $C^2$ on $Q$ in the extension sense and $W\chi_1=W\chi_2=G$ on $\mathbb R^3\times(t_0,T)$, then $W(\chi_1-\chi_2)=0$ on $\mathbb R^3\times(t_0,T)$.

Nothing is asserted about prescribed boundary values of $\chi$ on a bounded spatial domain, about spatial decay of $\chi$, or about Lorenz gauge fixing for a cavity problem with prescribed boundary data; the older global gauge promise on bounded domains is outside this result.

## Facts & Assumptions

**Given:** The constant $c>0$, the times $t_0<T$, the potential pair $(\varphi,A)$ of class $C^\infty$ on $Q$ in the extension sense, and the countable-choice hypothesis.

[F1] For a potential pair, $E(\varphi,A)=-\nabla\varphi-\partial_tA$, $B(\varphi,A)=\operatorname{curl}A$, $G(\varphi,A)=\operatorname{div}A+c^{-2}\partial_t\varphi$, the gauge transform is $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,A+\nabla\chi)$ and $Wu=c^{-2}\partial_t^2u-\Delta u$ ([[def-em-potential-gauge-and-field-conventions]]).

[F2] For $f$ of class $C^2$, its Laplacian is $\Delta f=\operatorname{div}\nabla f=\sum_{i<3}\partial_i\partial_if$ ([[def-laplacian-of-a-c2-function]]).

[F3] Let $a,b\in C^\infty(\mathbb R^3)$ and let $h$ be of class $C^\infty$ on $\mathbb R^3\times[t_0,T]$ in the extension sense, and put $Wu=c^{-2}\partial_t^2u-\Delta u$. Then the function $u=\chi$ supplied by the theorem with $a=b=0$ and $h$ is of class $C^\infty$ on $\mathbb R^3\times[t_0,T]$ in the extension sense, satisfies $W\chi=h$ on $\mathbb R^3\times(t_0,T)$ and satisfies $\chi(\cdot,t_0)=0$, $\partial_t\chi(\cdot,t_0)=0$; the theorem assumes the Axiom of Countable Choice, used through its sphere and parameter integrations ([[thm-em-wave-cauchy-kirchhoff]]).

[F4] If $\phi$ is of class $C^2$ on an open subset of $\mathbb R^3$, then $\operatorname{curl}\nabla\phi=0$ there ([[thm-the-curl-of-a-gradient-vanishes]]).

[F5] If $\phi$ is of class $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_j\phi=\partial_j\partial_i\phi$ for all coordinate indices ([[thm-clairaut-schwarz-mixed-partials]]).

[F6] For $C^1$ fields and scalars, $\operatorname{div}$ and $\operatorname{curl}$ are linear: $\operatorname{div}(F+G)=\operatorname{div}F+\operatorname{div}G$, $\operatorname{curl}(F+G)=\operatorname{curl}F+\operatorname{curl}G$, and likewise for scalar multiples ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[F7] The divergence of a $C^1$ field and the curl of a $C^1$ field in three coordinates are computed pointwise from first partial derivatives, so they gain the regularity of those derivatives ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F8] The gradient collects coordinate partial derivatives, $\nabla\phi=(\partial_0\phi,\partial_1\phi,\partial_2\phi)$, and a partial derivative is the one-variable derivative along a coordinate line; sums and scalar multiples differentiate termwise ([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]]).

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Since $A$ and $\varphi$ are of class $C^\infty$ on $Q$ in the extension sense, the field $\operatorname{div}A$ and the partial derivative $\partial_t\varphi$ are of class $C^\infty$ on $Q$ in the extension sense: they are finite sums of first partial derivatives of $C^\infty$ functions, and first partial derivatives of $C^\infty$ functions are again $C^\infty$. Hence $G=\operatorname{div}A+c^{-2}\partial_t\varphi$ is of class $C^\infty$ on $Q$ in the extension sense. [given, F1, F7, F8]

2.1 Apply [F3] with $a=b=0$ and $h=G$, which is legitimate because $G$ is of class $C^\infty$ on the slab in the extension sense; the assumption [A1] is carried by that theorem. This supplies a function $\chi$ of class $C^\infty$ on $Q$ in the extension sense with $W\chi=G$ on $\mathbb R^3\times(t_0,T)$, $\chi(\cdot,t_0)=0$ and $\partial_t\chi(\cdot,t_0)=0$, proving (a). [step 1.1, F3, A1]

3.1 Since $\chi$ is of class $C^\infty$ in the extension sense, its partial derivatives $\partial_t\chi$ and $\nabla\chi$ are of class $C^\infty$ in the extension sense; adding these to the $C^\infty$ pair members, $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,A+\nabla\chi)$ is a potential pair of class $C^\infty$ on $Q$ in the extension sense. [step 2.1, F1, F8]

4.1 The magnetic field is unchanged: $\operatorname{curl}(A+\nabla\chi)=\operatorname{curl}A+\operatorname{curl}\nabla\chi=\operatorname{curl}A$, because $\operatorname{curl}$ is linear and $\operatorname{curl}\nabla\chi=0$ for the $C^\infty$, hence $C^2$, function $\chi$. [step 3.1, F1, F4, F6]

4.2 The electric field is unchanged: expanding with the linearity of $\nabla$ and $\partial_t$, $-\nabla(\varphi-\partial_t\chi)-\partial_t(A+\nabla\chi)=-\nabla\varphi-\partial_tA+\bigl(\nabla\partial_t\chi-\partial_t\nabla\chi\bigr)$, and the bracket vanishes because each of its coordinates is a difference $\partial_i\partial_t\chi-\partial_t\partial_i\chi=0$ of mixed second partials of the $C^2$ function $\chi$. [step 3.1, F1, F5, F8]

4.3 The Lorenz divergence of the transformed pair vanishes: $\operatorname{div}(A+\nabla\chi)+c^{-2}\partial_t(\varphi-\partial_t\chi)=\operatorname{div}A+\operatorname{div}\nabla\chi+c^{-2}\partial_t\varphi-c^{-2}\partial_t^2\chi=G+\Delta\chi-c^{-2}\partial_t^2\chi=G-W\chi=0$ on $\mathbb R^3\times(t_0,T)$, using $\Delta\chi=\operatorname{div}\nabla\chi$ and the linearity of $\operatorname{div}$ and $\partial_t$. [step 2.1, step 3.1, F1, F2, F6, F8]

5.1 For (d), if $\chi_1,\chi_2$ are $C^2$ on $Q$ in the extension sense, then each second partial derivative is additive, $\partial_i\partial_j(\chi_1-\chi_2)=\partial_i\partial_j\chi_1-\partial_i\partial_j\chi_2$, by applying the one-variable linearity of differentiation along coordinate lines twice; summing over $i=j$ and applying the definition of $W$ gives $W(\chi_1-\chi_2)=W\chi_1-W\chi_2=G-G=0$ on $\mathbb R^3\times(t_0,T)$. [given, F1, F8] ∎

## Remarks

- **The countable-choice hypothesis travels with the conclusion.** Parts (a)–(c) consume the existence clause of the in-run wave theorem [[thm-em-wave-cauchy-kirchhoff]], which is stated under $\mathrm{AC}_\omega$; part (d) is a purely local algebraic statement and does not itself use it. No arbitrary-index choice and no dependent choice is used.

- **What is not proved.** The construction is the free-space wave solution with zero Cauchy data and source $G$; it produces no control of $\chi$ on a bounded spatial domain, no prescribed boundary values and no decay at spatial infinity. In particular it does not supply a gauge in the presence of a cavity with prescribed boundary data.
