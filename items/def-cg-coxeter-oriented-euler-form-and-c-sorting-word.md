---
id: "def-cg-coxeter-oriented-euler-form-and-c-sorting-word"
kind: "definition"
title: "Coxeter elements, the oriented Euler form, the skew form, and the periodic word"
status: draft
origin: "pipeline"
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 6
deps:
  - def-hh-coxeter-matrix-word-group-and-length
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-canonical-reflection-homomorphism
justified_by:
  - lem-cg-coxeter-word-transport-and-form-independence
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "sections 2.6-2.7, pp. 16-18 (Coxeter elements, the periodic word c-infinity, c-sorting words and their subset sequence); section 3.1, pp. 18-19 (the Euler form E_c and the skew form omega_c = E_c - E_c^T)"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 2, pp. 5-6 (Coxeter elements, c-infinity, the c-sorting word and its sequence of subsets; Lemma 2.1 and Lemma 2.2)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 1, sections 1.1-1.4 (presentations, length, reduced words, exchange)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $S$ be finite and let $m$ be a Coxeter matrix on $S$; let $W$ be the presented group with length function $\ell$ and reduced expressions ([[def-hh-coxeter-matrix-word-group-and-length]]), and let $V=\mathbb R^S$ carry the Coxeter form $B$, with $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for $s\ne t$ finite and $B(e_s,e_t)=-1$ when $m(s,t)=\infty$, together with the canonical reflection representation $\rho$ and simple roots $e_s$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]). Write $n:=|S|$ and $S(w)$ for the support of $w$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1)).

**(1) Coxeter elements and Coxeter words.** A word $s_1\cdots s_n$ in the alphabet $S$ is a **Coxeter word** when $S=\{s_1,\dots,s_n\}$. An element $c\in W$ is a **Coxeter element** of $(W,S)$ when it is the value of a Coxeter word; a **reduced Coxeter word** for $c$ is any reduced expression of $c$. That every Coxeter word is reduced, that every reduced expression of a Coxeter element is again a Coxeter word, and how two Coxeter words for the same element are related, is proved in [[lem-cg-coxeter-word-transport-and-form-independence]]; none of this is asserted here. Throughout the page, $c=s_1\cdots s_n$ denotes a Coxeter element together with a chosen reduced Coxeter word.

**(2) The Cartan form and the oriented Euler form.** Put $K:=2B$; then $K$ is symmetric bilinear with $K(e_s,e_s)=2$, $K(e_s,e_t)=-2\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $K(e_s,e_t)=-2$ when $m(s,t)=\infty$. The **oriented Euler form** of the ordered word $(s_1,\dots,s_n)$ is the bilinear form $E_c$ on $V$ with
$$E_c(e_{s_i},e_{s_j}):=\begin{cases}K(e_{s_i},e_{s_j})&\text{if }i>j,\\ 1&\text{if }i=j,\\ 0&\text{if }i<j,\end{cases}$$
extended bilinearly. The **skew form** is $\omega_c:=E_c-E_c^{\mathsf T}$, that is, $\omega_c(\beta,\beta')=E_c(\beta,\beta')-E_c(\beta',\beta)$; equivalently $\omega_c(e_{s_i},e_{s_j})=K(e_{s_i},e_{s_j})$ for $i>j$, $0$ for $i=j$, and $-K(e_{s_i},e_{s_j})$ for $i<j$. This normalization is used throughout: $E_c+E_c^{\mathsf T}=K=2B$, and the sign of $\omega_c$ on the roots of a rank-two subsystem is the orientation of that subsystem induced by $c$. That $E_c$ and $\omega_c$ depend only on $c$ and not on the chosen reduced Coxeter word is proved in [[lem-cg-coxeter-word-transport-and-form-independence]]; the forms are not asserted here to be independent of the word.

**(3) The periodic word and admissible position sets.** Fix a reduced Coxeter word $s_1\cdots s_n$ for $c$ and form the half-infinite periodic word
$$c^\infty:=s_1\cdots s_n\,|\,s_1\cdots s_n\,|\,\cdots,$$
where the symbols $|$ are inert dividers after every block of $n$ letters and are ignored when subwords are evaluated. A **position set** for $c^\infty$ is a finite strictly increasing sequence of positions $i_1<\cdots<i_k$; its **value** is $s_{i_1}\cdots s_{i_k}\in W$, and it is **admissible for $w\in W$** when its value is $w$ and $k=\ell(w)$, equivalently when its letters form a reduced expression of $w$. The $c^\infty$**-sorting word** of $w$ is the lexicographically earliest admissible position set for $w$: least first position, then least second position, and so on. The **block sequence** of an admissible position set is the sequence $T_1,T_2,\dots$ in which $T_j\subseteq S$ is the set of letters of the subword occurring between the $(j-1)$-st and the $j$-th divider; it is read up to the last nonempty set.

**(4) Well-definedness.** The existence and uniqueness of the lexicographically earliest admissible position set for every $w\in W$, and the independence of its block sequence from the chosen reduced Coxeter word for $c$, are proved in [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (the greedy scan and its minimality) and [[lem-cg-coxeter-word-transport-and-form-independence]] (transport between Coxeter words); these are the recorded justifiers of this definition. Sortability of elements is defined later on this page ([[def-cg-sortable-element-skip-roots-and-cone]]).

**(5) Abstentions.** Nothing about finiteness of $W$, positivity or nondegeneracy of $B$, the sign of $\omega_c$ on roots, skip roots, cones or sortable elements is asserted here beyond the displayed formulas. No Choice is used.
