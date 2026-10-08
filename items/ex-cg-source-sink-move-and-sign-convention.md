---
id: "ex-cg-source-sink-move-and-sign-convention"
kind: "example"
title: "A source–sink move in A3: transporting the Euler and skew forms by an initial letter"
status: draft
origin: pipeline
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 18
deps:
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - lem-cg-coxeter-word-transport-and-form-independence
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-canonical-reflection-homomorphism
  - def-hh-coxeter-matrix-word-group-and-length
proof_strategy: direct
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Lemma 3.3, p. 18 (E_c and conjugation by an initial letter), Lemmas 3.7 and 3.8, pp. 19-20 (restriction and conjugation of omega_c)"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 2, p. 6 (if s is initial in c then scs is a Coxeter element and s is final in scs)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 1.4, pp. 14-18 (reduced expressions); the source-sink form transport is Reading--Speyer, Lemmas 3.3 and 3.8"
verification:
  precheck: pass
---

## Statement

Let $(W,S)$ be of type $A_3$, $c=s_1s_2s_3$ with initial letter $s=s_1$, and let
$c'=scs=s_2s_3s_1$, a reduced Coxeter word for the conjugate Coxeter element
$s_1cs_1$; in $c'$ the generator $s_1$ is final instead of initial, a source-sink
move. For the forms of $c'$ one computes, in the ordered basis
$(e_{s_2},e_{s_3},e_{s_1})$,
$$E_{c'}=\begin{pmatrix}1&0&0\\-1&1&0\\-1&0&1\end{pmatrix},\qquad \omega_{c'}=E_{c'}-E_{c'}^{\mathsf T}=\begin{pmatrix}0&1&1\\-1&0&0\\-1&0&0\end{pmatrix},$$
that is, in the fixed basis $(e_{s_1},e_{s_2},e_{s_3})$ one has
$E_{c'}(e_{s_1},e_{s_2})=-1$, $E_{c'}(e_{s_1},e_{s_3})=0$,
$E_{c'}(e_{s_2},e_{s_3})=0$ and $\omega_{c'}(e_{s_1},e_{s_2})=-1$,
$\omega_{c'}(e_{s_1},e_{s_3})=0$, $\omega_{c'}(e_{s_2},e_{s_3})=1$. Then:

**(i)** The conjugation identities of [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (3) hold:
$E_{c'}(\rho(s_1)\beta,\rho(s_1)\beta')=E_c(\beta,\beta')$ and
$\omega_{c'}(\rho(s_1)\beta,\rho(s_1)\beta')=\omega_c(\beta,\beta')$ for all
$\beta,\beta'$ taken from the simple basis. For example, using
$\rho(s_1)e_{s_1}=-e_{s_1}$, $\rho(s_1)e_{s_2}=e_{s_1}+e_{s_2}$ and
$\rho(s_1)e_{s_3}=e_{s_3}$:
$$E_{c'}(\rho(s_1)e_{s_1},\rho(s_1)e_{s_2})=E_{c'}(-e_{s_1},e_{s_1}+e_{s_2})=-E_{c'}(e_{s_1},e_{s_1})-E_{c'}(e_{s_1},e_{s_2})=-1+1=0=E_c(e_{s_1},e_{s_2}),$$
$$\omega_{c'}(\rho(s_1)e_{s_1},\rho(s_1)e_{s_2})=\omega_{c'}(-e_{s_1},e_{s_1}+e_{s_2})=-\omega_{c'}(e_{s_1},e_{s_1})-\omega_{c'}(e_{s_1},e_{s_2})=0+1=1=\omega_c(e_{s_1},e_{s_2}),$$
and similarly for the remaining pairs.

**(ii)** The orientation of the rank-two subsystem $W_{\{s_1,s_2\}}$ changes sign when
expressed in its canonical generators: in $c$ the relative order is $s_1$ before
$s_2$, in $c'$ it is $s_2$ before $s_1$, and correspondingly
$\omega_c(e_{s_1},e_{s_2})=1$ while $\omega_{c'}(e_{s_2},e_{s_1})=1$; the
transported form is the same form read after applying the reflection $\rho(s_1)$
to the two canonical roots. This is the sign convention used in
[[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (4): the forms transport by conjugation while the orientation on the fixed canonical roots reverses. No Axiom of Choice is used.

## Facts & Assumptions

**Given:** the type-$A_3$ Coxeter matrix with $S=\{s_1,s_2,s_3\}$, the presented group $W$, the space $V=\mathbb R^S$ with its simple basis $(e_{s_1},e_{s_2},e_{s_3})$, the Coxeter form $B$, the canonical reflection representation $\rho$, the words $c=s_1s_2s_3$ and $c'=s_1cs_1=s_2s_3s_1$, and the forms $K=2B$, $E_c,\omega_c,E_{c'},\omega_{c'}$.

[F1] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (1),(2): a Coxeter word uses each element of $S$ once; for a chosen ordered word, $K=2B$ and $E_c(e_{s_i},e_{s_j})=K(e_{s_i},e_{s_j})$ when $i>j$, $1$ when $i=j$, $0$ when $i<j$, with $\omega_c=E_c-E_c^{\mathsf T}$.

[F2] [[lem-cg-coxeter-word-transport-and-form-independence]] (1): every Coxeter word is reduced, and every reduced expression of a Coxeter element is again a Coxeter word.

[F3] [[def-cg-real-coxeter-form-and-reflection]] (2),(3): $B(e_s,e_s)=1$, $B(e_{s_1},e_{s_2})=B(e_{s_2},e_{s_3})=-\tfrac12$, $B(e_{s_1},e_{s_3})=0$, and $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ for $B(a,a)\ne0$.

[F4] [[def-cg-canonical-reflection-homomorphism]] (1): $\rho:W\to\mathrm{GL}(V)$ is a homomorphism with $\rho(s)=r_{e_s}$ for every $s\in S$.

[F5] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (2) combined with [[def-cg-real-coxeter-form-and-reflection]] (2),(3): for the word $c=s_1s_2s_3$ the triangular rule with $K=2B$, $B(e_{s_1},e_{s_2})=B(e_{s_2},e_{s_3})=-\tfrac12$ and $B(e_{s_1},e_{s_3})=0$ gives the simple-basis entries $E_c(e_{s_1},e_{s_2})=0$, $E_c(e_{s_1},e_{s_3})=0$, $E_c(e_{s_2},e_{s_1})=-1$, $E_c(e_{s_2},e_{s_3})=0$, $E_c(e_{s_3},e_{s_1})=0$, $E_c(e_{s_3},e_{s_2})=-1$ and the diagonal entries $1$, hence $\omega_c(e_{s_1},e_{s_2})=E_c(e_{s_1},e_{s_2})-E_c(e_{s_2},e_{s_1})=1$, $\omega_c(e_{s_2},e_{s_3})=1$ and $\omega_c(e_{s_1},e_{s_3})=0$.

[F6] [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (3): if $s$ is initial in $c$, then for all $\beta,\beta'\in V$ one has $E_{scs}(\rho(s)\beta,\rho(s)\beta')=E_c(\beta,\beta')$ and $\omega_{scs}(\rho(s)\beta,\rho(s)\beta')=\omega_c(\beta,\beta')$.

[F7] [[def-hh-coxeter-matrix-word-group-and-length]]: the presentation has the relator $s^2=1$ for every $s\in S$.

## Proof

**Proof technique:** identify the conjugate word, compute its forms from the triangular rule, then check the conjugation identity on the nine simple-basis pairs directly.

1.1 The word $c'=s_1cs_1$ evaluates to $s_1s_1s_2s_3s_1=s_2s_3s_1$ using $s_1^2=1$ [F7], and it uses each of $s_1,s_2,s_3$ once, so $c'$ is a Coxeter word and, by [F2], a reduced Coxeter word for the conjugate Coxeter element $s_1cs_1$; in it $s_1$ is the final letter. This is the source-sink move. [F1, F2, F7, given]

1.2 Compute $E_{c'}$ in the ordered basis $(q_1,q_2,q_3)=(e_{s_2},e_{s_3},e_{s_1})$ from [F1] and the entries $K=2B$ of [F3]: $K(e_{s_2},e_{s_3})=K(e_{s_3},e_{s_2})=-1$, $K(e_{s_1},e_{s_2})=K(e_{s_2},e_{s_1})=-1$, $K(e_{s_1},e_{s_3})=K(e_{s_3},e_{s_1})=0$. Since $s_2$ precedes $s_3$, which precedes $s_1$ in the word $c'$, the triangular rule gives $E_{c'}(q_1,q_1)=E_{c'}(q_2,q_2)=E_{c'}(q_3,q_3)=1$, $E_{c'}(q_2,q_1)=K(e_{s_3},e_{s_2})=-1$, $E_{c'}(q_3,q_1)=K(e_{s_1},e_{s_2})=-1$, $E_{c'}(q_3,q_2)=K(e_{s_1},e_{s_3})=0$, and the three upper-triangular entries $E_{c'}(q_1,q_2)=E_{c'}(q_1,q_3)=E_{c'}(q_2,q_3)=0$. This is the displayed matrix; subtracting its transpose gives the displayed $\omega_{c'}$. In the fixed basis $(e_{s_1},e_{s_2},e_{s_3})$ the read-off entries are $E_{c'}(e_{s_1},e_{s_2})=E_{c'}(q_3,q_1)=-1$, $E_{c'}(e_{s_1},e_{s_3})=E_{c'}(q_3,q_2)=0$, $E_{c'}(e_{s_2},e_{s_3})=E_{c'}(q_1,q_2)=0$, while $\omega_{c'}(e_{s_1},e_{s_2})=E_{c'}(e_{s_1},e_{s_2})-E_{c'}(e_{s_2},e_{s_1})=-1-0=-1$, $\omega_{c'}(e_{s_1},e_{s_3})=E_{c'}(e_{s_1},e_{s_3})-E_{c'}(e_{s_3},e_{s_1})=0$, and $\omega_{c'}(e_{s_2},e_{s_3})=E_{c'}(e_{s_2},e_{s_3})-E_{c'}(e_{s_3},e_{s_2})=0-(-1)=1$. [F1, F3, algebra, given]

1.3 The reflection $\rho(s_1)=r_{e_{s_1}}$ acts on the simple basis by [F3] and [F4]: $\rho(s_1)e_{s_1}=-e_{s_1}$, $\rho(s_1)e_{s_2}=e_{s_2}-2B(e_{s_2},e_{s_1})e_{s_1}=e_{s_1}+e_{s_2}$, and $\rho(s_1)e_{s_3}=e_{s_3}-2B(e_{s_3},e_{s_1})e_{s_1}=e_{s_3}$. [F3, F4, algebra]

2.1 Check $E_{c'}(\rho(s_1)e_{q},\rho(s_1)e_{q'})=E_c(e_{q},e_{q'})$ on the nine simple pairs, using bilinearity, step 1.3, the entries of step 1.2 and the values of [F5]. Pair $(q,q')=(s_1,s_2)$: $E_{c'}(-e_{s_1},e_{s_1}+e_{s_2})=-E_{c'}(e_{s_1},e_{s_1})-E_{c'}(e_{s_1},e_{s_2})=-1+1=0=E_c(e_{s_1},e_{s_2})$. Pair $(s_1,s_1)$: $E_{c'}(-e_{s_1},-e_{s_1})=E_{c'}(e_{s_1},e_{s_1})=1=E_c(e_{s_1},e_{s_1})$. Pair $(s_1,s_3)$: $E_{c'}(-e_{s_1},e_{s_3})=-E_{c'}(e_{s_1},e_{s_3})=0=E_c(e_{s_1},e_{s_3})$. Pair $(s_2,s_1)$: $E_{c'}(e_{s_1}+e_{s_2},-e_{s_1})=-E_{c'}(e_{s_1},e_{s_1})-E_{c'}(e_{s_2},e_{s_1})=-1-0=-1=E_c(e_{s_2},e_{s_1})$. Pair $(s_2,s_2)$: $E_{c'}(e_{s_1}+e_{s_2},e_{s_1}+e_{s_2})=E_{c'}(e_{s_1},e_{s_1})+E_{c'}(e_{s_1},e_{s_2})+E_{c'}(e_{s_2},e_{s_1})+E_{c'}(e_{s_2},e_{s_2})=1-1+0+1=1=E_c(e_{s_2},e_{s_2})$. Pair $(s_2,s_3)$: $E_{c'}(e_{s_1}+e_{s_2},e_{s_3})=E_{c'}(e_{s_1},e_{s_3})+E_{c'}(e_{s_2},e_{s_3})=0+0=0=E_c(e_{s_2},e_{s_3})$. Pair $(s_3,s_1)$: $E_{c'}(e_{s_3},-e_{s_1})=-E_{c'}(e_{s_3},e_{s_1})=0=E_c(e_{s_3},e_{s_1})$. Pair $(s_3,s_2)$: $E_{c'}(e_{s_3},e_{s_1}+e_{s_2})=E_{c'}(e_{s_3},e_{s_1})+E_{c'}(e_{s_3},e_{s_2})=0-1=-1=E_c(e_{s_3},e_{s_2})$. Pair $(s_3,s_3)$: $E_{c'}(e_{s_3},e_{s_3})=1=E_c(e_{s_3},e_{s_3})$. All nine pairs agree, so by bilinearity the identity holds on all of $V$. [step 1.2, step 1.3, F1, F3, F5, algebra]

3.1 Transport of $\omega$: since $\omega_{c'}=E_{c'}-E_{c'}^{\mathsf T}$ and $\omega_c=E_c-E_c^{\mathsf T}$ by [F1], and since $\rho(s_1)$ is linear and preserves the pairing of arguments' roles, step 2.1 gives $\omega_{c'}(\rho(s_1)\beta,\rho(s_1)\beta')=E_{c'}(\rho(s_1)\beta,\rho(s_1)\beta')-E_{c'}(\rho(s_1)\beta',\rho(s_1)\beta)=E_c(\beta,\beta')-E_c(\beta',\beta)=\omega_c(\beta,\beta')$ for all basis vectors, hence for all vectors by bilinearity. This proves (i) by direct computation, illustrating the general identity [F6]. [step 2.1, F1, F6, algebra]

4.1 Clause (ii): from [F5], $\omega_c(e_{s_1},e_{s_2})=1$, and step 1.2 gives $\omega_{c'}(e_{s_2},e_{s_1})=1$. In $c=s_1s_2s_3$ the noncommuting pair $s_1,s_2$ occurs in the order $s_1$ before $s_2$, so the oriented entry is $\omega_c(e_{s_1},e_{s_2})=-K(e_{s_1},e_{s_2})=1$; in $c'=s_2s_3s_1$ the same pair occurs in the reversed order $s_2$ before $s_1$, and the oriented entry is $\omega_{c'}(e_{s_2},e_{s_1})=1$, positive in the reversed order. Moreover step 3.1 with $\beta=e_{s_1},\beta'=e_{s_2}$ exhibits the transported identity $\omega_{c'}(\rho(s_1)e_{s_1},\rho(s_1)e_{s_2})=\omega_c(e_{s_1},e_{s_2})$: the new form is the old form read after applying $\rho(s_1)$ to the two canonical roots, so the forms are conjugate, while the sign on the fixed ordered canonical roots is reversed. This is the sign convention used in the rank-two alignment definition. [F5, F6, step 1.2, step 3.1, given, algebra]

5.1 Conclusion: steps 1.1-1.3, 2.1, 3.1 and 4.1 verify (i) and (ii) by exact matrix and basis-pair computations. Every witness is a fixed basis vector or a fixed word, so no Choice is used. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1] ∎
