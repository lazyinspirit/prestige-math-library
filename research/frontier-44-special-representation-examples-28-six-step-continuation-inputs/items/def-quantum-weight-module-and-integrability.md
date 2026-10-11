---
id: def-quantum-weight-module-and-integrability
kind: definition
title: "Quantum weight modules, weights in $P$, and integrability"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-drinfeld-jimbo-quantized-enveloping-algebra, def-kac-moody-integral-and-dominant-integral-weights, def-symmetrizable-cartan-datum-for-a-quantum-group]
justified_by: []
aliases: []
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§2 and Definition 3.1, printed pp. 7-10: the weight spaces $M_\\mu=\\{v:q^hv=q^{\\mu(h)}v\\}$, the category of integrable highest-weight modules with finite-dimensional weight spaces and bounded weights, and local nilpotence of the $e_i$ and $f_i$."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.2.1, printed pp. 314-317: type-one weight modules, the weight decomposition for integrable modules, and the rank-one string structure."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 3, §3.5, printed pp. 57-63: highest weight modules with a weight decomposition; Ch. 6, §6.1-6.2."
---

## Definition

Let $(I,A,D,P,P^{\vee},q)$ be a symmetrizable Cartan datum for a quantum group
with $a_{ii}=2$ for all $i$
([[def-symmetrizable-cartan-datum-for-a-quantum-group]]), with root lattice $Q$,
simple roots $\alpha_i\in P$ and integer pairing
$\langle\cdot,\cdot\rangle:P\times P^{\vee}\to\mathbb Z$, and let
$U_q(\mathfrak g)$ be its Drinfeld–Jimbo algebra with generators $E_i,F_i,K_h$
([[def-drinfeld-jimbo-quantized-enveloping-algebra]]). The lattice $P$ plays
the role of the integral weights of the classical theory
([[def-kac-moody-integral-and-dominant-integral-weights]]); the pairing need not
be perfect, and no identification $P=\operatorname{Hom}(P^{\vee},\mathbb Z)$ is
assumed anywhere.

A **$P$-graded type-one quantum weight module** is a left $U_q(\mathfrak g)$-module $M$
together with a direct sum decomposition

$$M=\bigoplus_{\mu\in P}M_\mu$$

(an internal direct sum of $\mathbb Q(q)$-subspaces, only finitely many nonzero
on each vector) such that, for all $\mu\in P$, $h\in P^{\vee}$ and $i\in I$,

$$K_h\ \text{acts on}\ M_\mu\ \text{by the scalar}\ q^{\langle\mu,h\rangle},\qquad E_iM_\mu\subseteq M_{\mu+\alpha_i},\qquad F_iM_\mu\subseteq M_{\mu-\alpha_i}.$$

The subspaces $M_\mu$ are the **chosen label-weight spaces**: the grading is
part of the structure and is not reconstructed from the action, because the
pairing may have a kernel. **Morphisms** of $P$-graded type-one weight modules
are the $U_q(\mathfrak g)$-module maps $f\colon M\to N$ with
$f(M_\mu)\subseteq N_\mu$ for every $\mu$; the weight submodules and quotients
considered on this page are those with the induced grading (Verification, steps
3.1 and 4.1).

The module is **integrable** if $E_i$ and $F_i$ are locally nilpotent on every
vector: for every $v\in M$ and every $i$ there are integers $N_e(v,i),N_f(v,i)\ge1$
with $E_i^{N_e(v,i)}v=0$ and $F_i^{N_f(v,i)}v=0$. The exponents may depend on
the vector and on $i$, and both directions are required independently;
integrability is not a uniform nilpotence condition.

The following are additional hypotheses, never part of the definition:
finiteness of the dimension of every $M_\mu$; boundedness of the set of $\mu$
with $M_\mu\ne0$ above (or below); finite generation of $M$. The zero module is
a $P$-graded type-one weight module with the empty grading ($M_\mu=0$ for all
$\mu$), and it is integrable.

Two remarks are recorded here and proved below. First, when the pairing
separates $P$, the spaces $M_\mu$ are exactly the simultaneous eigenspaces of
the $K_h$, and the present definition recovers the usual type-one weight
modules (Verification, steps 2.1 and 4.1). Second, when the pairing does not
separate, distinct labels $\mu\ne\mu'$ may carry the same toral character, and
a simultaneous toral eigenspace must not be equated with a single label space;
the definition therefore takes the label grading as data. The regularization of
finite-cone support and all highest-weight comparisons on this page are proved
later, not assumed here by writing $P=\operatorname{Hom}(P^{\vee},\mathbb Z)$.
No choice principle enters this definition.

## Facts & Assumptions

**Given:** A symmetrizable Cartan datum $(I,A,D,P,P^{\vee},q)$ with $a_{ii}=2$
and its Drinfeld–Jimbo algebra $U_q(\mathfrak g)$; a left $U_q(\mathfrak g)$-module
$M$ with a direct sum decomposition $M=\bigoplus_{\mu\in P}M_\mu$ satisfying the
scalar and containment conditions displayed above.

[F1] $K_0=1$, $K_hK_{h'}=K_{h+h'}$, $K_hE_iK_h^{-1}=q^{\langle\alpha_i,h\rangle}E_i$
and $K_hF_iK_h^{-1}=q^{-\langle\alpha_i,h\rangle}F_i$, so
$K_hE_i=q^{\langle\alpha_i,h\rangle}E_iK_h$ and
$K_hF_i=q^{-\langle\alpha_i,h\rangle}F_iK_h$
([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F2] The pairing is $\mathbb Z$-bilinear and $\langle\alpha_j,h_i\rangle=a_{ij}$;
the root lattice $Q=\bigoplus_i\mathbb Z\alpha_i$ lies in $P$
([[def-symmetrizable-cartan-datum-for-a-quantum-group]],
[[def-kac-moody-integral-and-dominant-integral-weights]] for the classical
integral-weight lattice and dominance convention).

[F3] $q$ is an indeterminate over $\mathbb Q$; hence for integers $a,b$ one has
$q^a=q^b$ if and only if $a=b$, and $q^0=1$
([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F4] Internal direct sums: if $M=\bigoplus_{\mu\in P}M_\mu$ and
$f\colon M\to N$ is a linear map with $f(M_\mu)\subseteq N_\mu$ into a second
graded module, then $\ker f=\bigoplus_\mu(M_\mu\cap\ker f)$ and
$\operatorname{im}f=\bigoplus_\mu f(M_\mu)$, and for a graded submodule $L$ the
quotient carries the induced direct-sum decomposition $M/L=\bigoplus_\mu(M_\mu+L)/L$;
this is the standard calculus of internal direct sums and linear maps preserving
them ([[def-drinfeld-jimbo-quantized-enveloping-algebra]] for the ambient
module conventions).

## Verification

**Proof technique:** check that the label-grading conditions are compatible with
the defining relations of $U_q(\mathfrak g)$, then compare the label spaces with
the simultaneous toral eigenspaces, transport the grading through morphisms,
and record the boundary cases of integrability.

1.1 The structural conditions are mutually consistent. If $v\in M_\mu$, then by [F1] $K_h(E_iv)=q^{\langle\alpha_i,h\rangle}E_iK_hv=q^{\langle\alpha_i,h\rangle}q^{\langle\mu,h\rangle}E_iv=q^{\langle\mu+\alpha_i,h\rangle}E_iv$, so the prescribed containment $E_iM_\mu\subseteq M_{\mu+\alpha_i}$ agrees with the scalar prescription on $M_{\mu+\alpha_i}$; similarly $K_h(F_iv)=q^{-\langle\alpha_i,h\rangle}q^{\langle\mu,h\rangle}F_iv=q^{\langle\mu-\alpha_i,h\rangle}F_iv$. Moreover $K_0$ acts on $M_\mu$ by $q^{\langle\mu,0\rangle}=1$ and $K_hK_{h'}$ by $q^{\langle\mu,h+h'\rangle}=q^{\langle\mu,h\rangle}q^{\langle\mu,h'\rangle}$ by [F2], as the toral relations require. [given, F1, F2, F3, algebra]

1.2 The grading-preserving module maps of the definition form a category: identities preserve each $M_\mu$, and a composite of grading-preserving maps is grading-preserving. [F4, algebra]

2.1 For $\mu\in P$ define its toral character $\chi_\mu\colon P^{\vee}\to\mathbb Q(q)^{\times}$ by $\chi_\mu(h):=q^{\langle\mu,h\rangle}$; the defining condition says that $K_h$ acts on $M_\mu$ by the scalar $\chi_\mu(h)$. Since $M$ is the internal direct sum of the $M_\mu$, the simultaneous eigenspace $M^\chi=\{v:K_hv=\chi(h)v\ \text{for all }h\}$ is $M^\chi=\bigoplus_{\mu:\chi_\mu=\chi}M_\mu$. Two labels have the same character, $\chi_\mu=\chi_{\mu'}$, if and only if $\langle\mu-\mu',h\rangle=0$ for all $h\in P^{\vee}$; by [F3] this is exactly equality of the integer functions $h\mapsto\langle\cdot,h\rangle$. If the pairing separates $P$ (that is, $\mu\ne\mu'$ implies $\langle\mu-\mu',h\rangle\ne0$ for some $h$), each $M^\chi$ equals a single label space $M_\mu$; if it does not separate, $M^\chi$ is the sum of all label spaces sharing the character. For an explicit nonseparating witness, take $P=\mathbb Z^2$, $P^{\vee}=\mathbb Z h$ with $\langle(a,b),h\rangle=a$: the distinct labels $(0,0)$ and $(0,1)$ have the same character, so a spectral eigenspace can merge two label spaces. [step 1.1, F2, F3, algebra]

2.2 Kernels, images and quotients inherit gradings. For a grading-preserving $f\colon M\to N$, the restriction $f_\mu:=f|_{M_\mu}$ maps $M_\mu$ into $N_\mu$, and $\ker f=\bigoplus_\mu\ker f_\mu$, $\operatorname{im}f=\bigoplus_\mu\operatorname{im}f_\mu$ by [F4]; for a graded submodule $L\subseteq M$ (one with $L=\bigoplus_\mu(L\cap M_\mu)$) the quotient has $M/L=\bigoplus_\mu (M_\mu+L)/L$. Hence the weight submodules and quotients used on this page carry induced label gradings, and the category is closed under the usual linear algebra of grading-preserving maps. The zero module has the empty grading $M_\mu=0$ for all $\mu$. [step 1.2, F4, algebra]

3.1 Integrability is exactly local nilpotence of the two families of generators on each vector: it is inherited by grading-preserving submodules and quotients, since $E_i^{N}v=0$ in $M$ implies $E_i^Nw=0$ for $w$ in a submodule and $E_i^N(w+L)=0$ in a quotient; no uniform exponent and no finite dimension is required. The zero module is integrable: its only vector is $0$, and $E_i^1 0=F_i^1 0=0$, so the exponents $N_e(0,i)=N_f(0,i)=1$ witness the condition. Finite-dimensionality of the $M_\mu$ and boundedness of the support are not part of the definition and are not implied by it: a direct sum of infinitely many copies of pairwise distinct one-dimensional $U_q(\mathfrak g)$-modules with the appropriate labels has infinite-dimensional label spaces unless the labels are separated, and a countably generated module may have unbounded support; neither is excluded. [step 2.2, F4, algebra]

4.1 Suppose finally that the pairing separates $P$. Then a $U_q(\mathfrak g)$-module structure with a decomposition $M=\bigoplus_{\mu\in P}M_\mu$ satisfying the three displayed conditions is the same data as a module structure with $M_\mu=\{v:K_hv=q^{\langle\mu,h\rangle}v\ \text{for all }h\in P^{\vee}\}$ for each $\mu$, together with $E_iM_\mu\subseteq M_{\mu+\alpha_i}$ and $F_iM_\mu\subseteq M_{\mu-\alpha_i}$. Indeed, given the conditions one has, by step 2.1, $M_\mu\subseteq\{v:K_hv=q^{\langle\mu,h\rangle}v\ \forall h\}\subseteq M_{\mu}$ (the second inclusion because any vector of the direct sum with $K_hv=q^{\langle\mu,h\rangle}v$ for all $h$ has all its nontrivial label components in characters equal to $\chi_\mu$, hence in $M_\mu$ by separation); conversely the eigenspace equations for a decomposition into the $M_\mu$ directly give the scalar condition, and the containments are assumed. This is the usual type-one definition for a separating datum, and it completes the discussion of the definition. [step 2.1, step 3.1, F2, F3, algebra] ∎
