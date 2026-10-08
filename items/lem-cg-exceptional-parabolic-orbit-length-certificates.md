---
id: lem-cg-exceptional-parabolic-orbit-length-certificates
kind: lemma
title: "Exceptional parabolic-orbit length certificates for E6, E7, E8, F4, H3 and H4"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 20
axiom_use: "The Axiom of Choice is used only through the basic-degree existence and degree determination of def-cg-coxeter-basic-degrees-and-graded-coinvariants and thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees; the exact orbit and distance certificates and polynomial identities use no choice."
deps: [def-cg-canonical-reflection-homomorphism, def-cg-real-coxeter-form-and-reflection, def-sine-and-cosine-by-power-series, def-axiom-of-choice, def-cg-coxeter-basic-degrees-and-graded-coinvariants, def-cg-coxeter-diagram-components-and-finite-type, def-finite-cardinality, def-pi-via-first-positive-cosine-zero, lem-cg-classical-type-poincare-products, lem-cg-exceptional-coxeter-spectra-from-exact-certificates, lem-cg-fundamental-weight-orbit-and-schreier-distance, lem-cg-reflection-form-invariance-and-rank-two-orders, thm-cg-finite-coxeter-classification-including-h-and-dihedral, thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees, thm-double-angle-and-power-reduction-identities, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-of-square-roots, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, cor-trigonometric-parity-and-pythagorean-identity, def-coset]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Björner and F. Brenti, Combinatorics of Coxeter Groups, GTM 231 (class-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Example 7.1.6, printed p. 205: the normal-form-tree computation of the F4 quotient polynomial W^{S\\setminus\\{s_4\\}}(q)=1+q+q^2+q^3+2(q^4+\\cdots+q^{11})+q^{12}+q^{13}+q^{14}+q^{15}=[8]_q(1+q^4+q^8), used as an independent comparison with the exact certificate. The local certificate proves all six cases."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used only to install the basic degrees through [[def-cg-coxeter-basic-degrees-and-graded-coinvariants]] and [[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]].

Let $(W,S)$ be the irreducible finite Coxeter system of one of the types $E_6,E_7,E_8,F_4,H_3,H_4$ with its canonical reflection representation and positive definite Coxeter form ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]], [[def-cg-coxeter-diagram-components-and-finite-type]]). In each type let $s_0$ be the **deleted node** and $T=S\setminus\{s_0\}$ the parabolic complement recorded in the exact certificate file research/coxeter-scaffold/math-checks/finite-degree-poincare-certificates.json. Its diagrams have edges $E_6:(0,1),(1,2),(2,3),(3,4),(2,5)$; $E_7:(0,1),(1,2),(2,3),(3,4),(4,5),(2,6)$; $E_8:(0,1),\dots,(5,6),(2,7)$ all labelled $3$; $F_4:(0,1),(1,2),(2,3)$ with $(1,2)$ labelled $4$; $H_3:(0,1),(1,2)$ with $(0,1)$ labelled $5$; and $H_4:(0,1),(1,2),(2,3)$ with $(0,1)$ labelled $5$. The deleted nodes are $0,5,6,0,2,3$, respectively. By the intrinsic parabolic presentation in [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2) and the classification, the resulting Coxeter systems $(W_T,T)$ have types
$$E_6\supset D_5,\quad E_7\supset E_6,\quad E_8\supset E_7,\quad F_4\supset B_3,\quad H_3\supset I_2(5),\quad H_4\supset H_3.$$

**(1) The certificate.** For each type, the certificate records the exact coefficient field $\mathbb Q$, $\mathbb Q(\sqrt2)$ with $\sqrt2^2=2$, or $\mathbb Q(\varphi)$ with $\varphi=2\cos(\pi/5)$ and $\varphi^2=\varphi+1$ (the edge scalars are derived in [F7]); the labelled diagram, deleted node, orbit $W\cdot f_0$ of the dual fundamental functional $f_0$ of that node, one exact coordinate for every orbit point, the image index for every generator at every orbit point, an applied word reaching every orbit point and its distance, the Coxeter-applied sequence, the exact matrix of the induced dual action in dual-simple-root coordinates, and its characteristic polynomial. The dual simple-reflection matrices are determined exactly by the recorded diagram and the coordinate action in [F2], but are not stored as separate fields. The recorded orbit sizes and quotient polynomials $\sum_{v\in W\cdot f_0}t^{d(v)}$ are
$$\begin{array}{c|c|c|c}\text{type}&|W\cdot f_0|&\sum_vt^{d(v)}&\text{parabolic type of }W_T\\\hline E_6&27&[9]_t(1+t^4+t^8)&D_5\\E_7&56&[14]_t(1+t^5)(1+t^9)&E_6\\E_8&240&[30]_t(1+t^6)(1+t^{10})(1+t^{12})&E_7\\F_4&24&[8]_t(1+t^4+t^8)&B_3\\H_3&12&[6]_t(1+t^5)&I_2(5)\\H_4&120&[30]_t(1+t^6)(1+t^{10})&H_3\end{array}$$

**(2) The lengths are the distances.** For each type the recorded function $d$ satisfies $|d(sv)-d(v)|\le1$ at every generator and orbit point, the recorded words attain every recorded value, and the orbit is closed under all generators. Consequently $d$ equals the minimal-coset-length distance of [[lem-cg-fundamental-weight-orbit-and-schreier-distance]] (2)-(3), and
$$P_W(t)=P_{W_T}(t)\cdot\sum_{v\in W\cdot f_0}t^{d(v)}.$$

**(3) Degree comparison and the Poincare product for the six types.** The basic degrees of [[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]] (2) are $D(W)=\{2,5,6,8,9,12\}$ for $E_6$, $\{2,6,8,10,12,14,18\}$ for $E_7$, $\{2,8,12,14,18,20,24,30\}$ for $E_8$, $\{2,6,8,12\}$ for $F_4$, $\{2,6,10\}$ for $H_3$, and $\{2,12,20,30\}$ for $H_4$. For the six parabolics, respectively, the degree multisets are $D(W_T)=\{2,4,5,6,8\}$, $\{2,5,6,8,9,12\}$, $\{2,6,8,10,12,14,18\}$, $\{2,4,6\}$, $\{2,5\}$, and $\{2,6,10\}$, from the same degree suppliers. The certificate verifies coefficientwise that
$$\Bigl(\sum_{v\in W\cdot f_0}t^{d(v)}\Bigr)\prod_{d'\in D(W_T)}[d']_t=\prod_{d\in D(W)}[d]_t.$$
Therefore, by (2) and induction on rank along $B_3\to F_4$, $I_2(5)\to H_3\to H_4$, and $D_5\to E_6\to E_7\to E_8$, whose initial parabolics are covered by [[lem-cg-classical-type-poincare-products]] (3), one has
$$P_W(t)=\prod_{d\in D(W)}[d]_t=\prod_{i=1}^{|S|}(1+t+\cdots+t^{d_i-1})$$
for each of the six exceptional types. The six quotient expressions in (1) agree coefficientwise with the corresponding identities and the certificate's exact distance histograms.

## Facts & Assumptions

**Given:** The certificate file research/coxeter-scaffold/math-checks/finite-degree-poincare-certificates.json (version 1, exact arithmetic over the stated fields and no floating point), its six case records with the diagrams, deleted nodes, fields, orbit data, degree multisets and check flags, and for each type the Coxeter system $(W,S)$, its canonical reflection representation $\rho$ on $V=\mathbb R^S$ with Coxeter form $B$, and the dual fundamental functional $f_0=e_{s_0}^*$.

[F1] $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for $s\ne t$; the reflection is $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$, is a $B$-preserving linear involution, and $r_{e_s}(e_t)=e_t+2\cos(\pi/m(s,t))e_s$ for $t\ne s$ ([[def-cg-real-coxeter-form-and-reflection]] (2)-(3), [[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)).

[F2] In dual simple-root coordinates $f_t:=f(e_t)$, the dual simple reflection $s\cdot f=f(\rho(s)^{-1}\cdot)$ acts by $f_s\mapsto-f_s$ and $f_t\mapsto f_t+2\cos(\pi/m(s,t))f_s$ for $t\ne s$; this is the dual action of [[lem-cg-fundamental-weight-orbit-and-schreier-distance]], under which $W\cdot f_0$ is the orbit of the certificate's seed coordinate.

[F3] Each table orbit size is the finite cardinality of the listed certificate states ([[def-finite-cardinality]]). For the orbit of a dual fundamental functional, $d(v)$ is the minimal length in the corresponding left coset $wW_T$ ([[def-coset]]), equals graph distance in the Schreier graph, satisfies $|d(s\cdot v)-d(v)|\le1$, and $P_W=P_{W_T}\sum_vt^{d(v)}$ ([[lem-cg-fundamental-weight-orbit-and-schreier-distance]] (2)-(4)).

[F4] The degree tables $D(W)$ and $D(W_T)$ displayed in the Statement are the basic degrees of [[def-cg-coxeter-basic-degrees-and-graded-coinvariants]] and [[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]] (1)-(3). Their Axiom-of-Choice premise is assumed here ([[def-axiom-of-choice]]).

[F5] The classical products $P_{B_3}=[2]_t[4]_t[6]_t$, $P_{I_2(5)}=[2]_t[5]_t$, and $P_{D_5}=[2]_t[4]_t[5]_t[6]_t[8]_t$ are proved in [[lem-cg-classical-type-poincare-products]] (3).

[F6] The six diagrams are the standard $E_6,E_7,E_8,F_4,H_3,H_4$ diagrams of the classification, so $W$ is finite and the Coxeter form is positive definite (hence its Gram matrix is invertible); deleting the stated node leaves the displayed standard parabolic diagram, and [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2) identifies the subgroup generated by that node set with the Coxeter system on the restricted matrix. In particular $W_T$ is finite as a subgroup of $W$ ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1), [[def-cg-coxeter-diagram-components-and-finite-type]] (1)-(2)).

[F7] Exact arithmetic in the three coefficient fields. For $m=3,4,5$, put $x_m=2\cos(\pi/m)>0$; positivity follows from $0<\pi/m<\pi/2$, strict decrease of cosine on $[0,\pi]$, and $\cos(\pi/2)=0$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]). The power-series definition gives $\cos 0=1$, and the cosine addition formulas and parity give $C_{k+1}=2cC_k-C_{k-1}$ for $C_k=\cos(k\theta)$, $C_0=1$, and $C_1=c=\cos\theta$, so $C_3=4c^3-3c$ and $C_5=16c^5-20c^3+5c$ ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]). At $\theta=\pi/3$, $C_3=\cos\pi=-1$ gives $(x_3-1)^2(x_3+2)=0$, hence $x_3=1$. At $\theta=\pi/4$, the double-angle identity and $\cos(\pi/2)=0$ give $x_4^2=2$, so $x_4=\sqrt2$ by positivity and uniqueness of the nonnegative square root ([[thm-double-angle-and-power-reduction-identities]], [[thm-of-square-roots]]). At $\theta=\pi/5$, $C_5=\cos\pi=-1$ gives $(x_5+2)(x_5^2-x_5-1)^2=0$, hence $x_5^2=x_5+1$; setting $\varphi=x_5$ gives the stated real quadratic field relation. Thus the edge scalars are $1$ for label $3$, $\sqrt2$ for label $4$, and $\varphi$ for label $5$.

[F8] The characteristic polynomial of the recorded bipartite Coxeter matrix is computed from exact matrix entries by the adjugate/Newton trace argument and agrees with the polynomial recorded in the certificate ([[lem-cg-exceptional-coxeter-spectra-from-exact-certificates]] (Statement), Proof (2.1), (3.1), (4.1), (6.1)).

## Proof

**Proof technique:** exact finite coordinate certificate, followed by the orbit-distance argument and rank induction.

1.1 **Data and dual matrices.** For each of the six rows, [F6] identifies the recorded diagram with the standard diagram of the type and the recorded parabolic with the stated type, and the deleted nodes of the statement are exactly the certificate's deleted-node entries. By [F7] every edge scalar is exact in the recorded coefficient field; [F2] then gives the exact dual simple-reflection matrices in dual simple-root coordinates, while nonedges have scalar $2\cos(\pi/2)=0$. The script applies these matrices to the seed coordinate vector, performs exact breadth-first search, and records each state, each generator image, an attaining word and its graph distance. The certificate matrix is for the dual action. If $R_t$ is a canonical simple-reflection matrix and $G$ is the Gram matrix, then $R_t^{\mathsf T}GR_t=G$ and $R_t^2=I$ by [F1], so its dual matrix $R_t^{\mathsf T}=GR_tG^{-1}$. Multiplying in the same recorded order shows that the dual-action Coxeter matrix is similar to the canonical Coxeter matrix; thus their characteristic polynomials agree. The canonical characteristic polynomial is the exact trace result of [F8], and the certificate also checks its cyclotomic factorization. The seven certificate flags (orbit closure, word upper bounds, edge-distance lower bounds, reflection involutions, the Poincare product identity, the cyclotomic spectrum identity, and the final characteristic recurrence) are true; rerunning the script reproduces the certificate byte for byte. Thus these are exact coordinate computations, with no floating-point approximation. [F1, F2, F6, F7, F8, given]

2.1 **The recorded lengths are the distances.** Fix one of the six types. The recorded state set contains the seed and is closed under every generator, and every recorded state is reached from the seed by its recorded generator sequence; hence it is exactly the orbit $W\cdot f_0$. Let $d'$ be the recorded distance. Each recorded word has length $d'$, so the graph distance $d$ is at most $d'$. Conversely, the certificate verifies that $d'$ changes by at most one along every generator edge and vanishes at the seed; summing this bound along any edge path gives $d'\le d$. Therefore $d'=d$, which by [F3] is the minimal left-coset length. The recorded orbit sizes and distance polynomials are thus correct, and [F3] gives $P_W=P_{W_T}\sum_vt^{d(v)}$. [step 1.1, F3, algebra]

3.1 **Degree comparison and induction.** The exact coefficient check of the Poincare product identity agrees with the degree multisets of [F4]. The six identities reduce to $[4]_t(1+t^4+t^8)=[12]_t$, $[5]_t(1+t^5)=[10]_t$, $[9]_t(1+t^9)=[18]_t$, $[6]_t(1+t^6)=[12]_t$, $[10]_t(1+t^{10})=[20]_t$, and $[12]_t(1+t^{12})=[24]_t$, where $[n]_t=1+t+\cdots+t^{n-1}$; multiplying by the corresponding parabolic degree products gives exactly the six ambient degree products in the statement. Using the quotient factorization established in step 2.1, each identity converts a known $P_{W_T}$ into $P_W$. For $F_4$, [F5] gives $P_{B_3}=[2]_t[4]_t[6]_t$, and the first relation gives $P_{F_4}=[2]_t[6]_t[8]_t[12]_t$. For $H_3$, [F5] gives $P_{I_2(5)}=[2]_t[5]_t$, and the second relation gives $P_{H_3}=[2]_t[6]_t[10]_t$; the fourth and fifth relations then give $P_{H_4}=[2]_t[12]_t[20]_t[30]_t$. For $E_6$, [F5] gives $P_{D_5}=[2]_t[4]_t[5]_t[6]_t[8]_t$, and the first relation gives $P_{E_6}=[2]_t[5]_t[6]_t[8]_t[9]_t[12]_t$; the second and third relations give $P_{E_7}=[2]_t[6]_t[8]_t[10]_t[12]_t[14]_t[18]_t$; the fourth, fifth and sixth relations give $P_{E_8}=[2]_t[8]_t[12]_t[14]_t[18]_t[20]_t[24]_t[30]_t$. Each result is $\prod_{d\in D(W)}[d]_t=\prod_{i=1}^{|S|}(1+t+\cdots+t^{d_i-1})$. Choice enters only through the degree determinations of [F4]; the certificate's orbit and distance verification is choice-free. [step 2.1, F4, F5, algebra] ∎
