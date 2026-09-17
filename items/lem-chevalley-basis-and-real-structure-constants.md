---
id: lem-chevalley-basis-and-real-structure-constants
kind: lemma
title: Chevalley basis and real structure constants
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-root-and-root-space-relative-to-a-cartan-subalgebra,
  thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra,
  thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional,
  prop-brackets-of-root-spaces,
  def-killing-form-of-a-finite-dimensional-lie-algebra,
  prop-trace-forms-are-symmetric-and-invariant,
  prop-killing-form-orthogonality-of-root-spaces,
  cor-opposite-root-spaces-pair-nondegenerately,
  def-killing-dual-vector-of-a-root,
  def-coroot-of-a-lie-algebra-root,
  lem-killing-length-of-a-root-is-nonzero,
  thm-root-string-property,
  cor-cartan-integers-are-integral,
  prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system,
  def-reduced-crystallographic-euclidean-root-system,
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
  thm-finite-dimensional-representations-of-sl-two,
  def-special-linear-lie-algebra-sl-two,
  thm-serre-presentation-theorem,
  def-serre-lie-algebra-of-a-finite-type-cartan-matrix,
  def-lie-algebra-presented-by-generators-and-relations,
  def-cartan-matrix-of-a-based-root-system,
  def-positive-system-and-base-of-simple-roots,
  thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates,
  def-coroot-and-dual-root-system,
  def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice,
  def-real-form-of-a-complex-lie-algebra,
  def-split-real-form,
  def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, Lemma 6.4 and Theorem 6.6, printed pp. 350-353, together with the split real form g_0 of (6.9) and Corollary 6.10 on printed p. 353; Chapter II, Lemma 2.18 and Corollary 2.37"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, Lectures 39-40"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 39, §39.1 (automorphisms of semisimple Lie algebras, Prop. 39.3) and §39.4 (the Cartan involution omega with omega(h_j) = -h_j, omega(e_j) = -f_j, omega(f_j) = -e_j, and the resulting real forms), printed pp. 180-184"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra, let $\mathfrak h\subseteq\mathfrak g$ be a Cartan
subalgebra with root system $\Phi=\Phi(\mathfrak g,\mathfrak h)$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]) and let $B$ be
the Killing form ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]).
For a root $\alpha$ let $H_\alpha\in\mathfrak h$ be its Killing-dual vector
([[def-killing-dual-vector-of-a-root]]) and $h_\alpha=2H_\alpha/\alpha(H_\alpha)$
its coroot, so that $\alpha(h_\alpha)=2$
([[def-coroot-of-a-lie-algebra-root]]), and let
$(\lambda,\mu):=B(H_\lambda,H_\mu)$ be the inner product on
$E=\operatorname{span}_{\mathbb R}\Phi$ of
[[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]].
Finally let nonzero vectors $e_\alpha^0\in\mathfrak g_\alpha$ be given for all
$\alpha\in\Phi$. Then there are nonzero complex numbers $c_\alpha$ such that
the rescaled vectors $e_\alpha:=c_\alpha e_\alpha^0$ have the following
properties, where $N_{\alpha\beta}\in\mathbb C$ is defined by
$[e_\alpha,e_\beta]=N_{\alpha\beta}e_{\alpha+\beta}$ when
$\alpha+\beta\in\Phi$, and $N_{\alpha\beta}:=0$ when
$\alpha+\beta\notin\Phi\cup\{0\}$; the pair $\beta=-\alpha$, for which
$[e_\alpha,e_{-\alpha}]=h_\alpha$ is not a multiple of a root vector, is
excluded from these definitions:

(i) $[e_\alpha,e_{-\alpha}]=h_\alpha$ for every $\alpha\in\Phi$;
(ii) $N_{\alpha\beta}=-N_{-\alpha,-\beta}$ for all $\alpha,\beta\in\Phi$ with
$\alpha+\beta\ne0$;
(iii) if $\alpha,\beta,\alpha+\beta\in\Phi$ and $\beta+n\alpha$ with
$-p\le n\le q$ is the $\alpha$-string through $\beta$, then
$N_{\alpha\beta}=\pm(p+1)$; in particular every structure constant
$N_{\alpha\beta}$ is an integer.

Moreover the real span
$$\mathfrak g_0:=\operatorname{span}_{\mathbb R}\{h_\alpha,e_\alpha:\alpha\in\Phi\}$$
is a real Lie subalgebra of $\mathfrak g$ regarded as a real Lie algebra, with
$\mathfrak g=\mathfrak g_0\oplus i\mathfrak g_0$; with respect to the basis
$\{h_{\alpha_1},\dots,h_{\alpha_r}\}\cup\{e_\alpha:\alpha\in\Phi\}$ determined
by a base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ of $\Phi$, all structure
constants of $\mathfrak g_0$ are integers, and $\mathfrak g_0$ is a split real
form of $\mathfrak g$ ([[def-real-form-of-a-complex-lie-algebra]],
[[def-split-real-form]]). Finally, if
$\lambda_\alpha=\bigl((\alpha,\alpha)/2\bigr)^{1/2}>0$ and
$X_\alpha:=\lambda_\alpha e_\alpha$ for all $\alpha$, then
$[X_\alpha,X_{-\alpha}]=H_\alpha$ and $B(X_\alpha,X_{-\alpha})=1$ for every
$\alpha$, and the constants $C_{\alpha\beta}$, defined by
$[X_\alpha,X_\beta]=C_{\alpha\beta}X_{\alpha+\beta}$ for
$\alpha+\beta\in\Phi$ and $C_{\alpha\beta}:=0$ for
$\alpha+\beta\notin\Phi\cup\{0\}$, are real and satisfy
$C_{\alpha\beta}=-C_{-\alpha,-\beta}$ whenever $\alpha+\beta\ne0$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Cartan subalgebra $\mathfrak h$, root system $\Phi=\Phi(\mathfrak g,\mathfrak h)$ and Killing form $B$; the coroots $h_\alpha$ and the inner product $(\lambda,\mu)=B(H_\lambda,H_\mu)$ on $E=\operatorname{span}_{\mathbb R}\Phi$; and nonzero vectors $e_\alpha^0\in\mathfrak g_\alpha$ for $\alpha\in\Phi$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]); it enters only through the Serre presentation theorem [L8] and the Euclidean root-system structure [L5], whose statements carry the assumption.

[L1] $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with $\dim\mathfrak g_\alpha=1$ for every root, and $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$, where $\mathfrak g_0=\mathfrak h$ and $\mathfrak g_\gamma=0$ for $\gamma\notin\Phi\cup\{0\}$ ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[prop-brackets-of-root-spaces]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

[L2] $B$ is bilinear, symmetric and invariant, $B([x,y],z)=B(x,[y,z])$; $B(\mathfrak g_\alpha,\mathfrak g_\beta)=0$ whenever $\alpha+\beta\ne0$; $B|_{\mathfrak h}$ is nondegenerate; and the pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}\to\mathbb C$, $(x,y)\mapsto B(x,y)$, is nondegenerate ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]], [[prop-killing-form-orthogonality-of-root-spaces]], [[cor-opposite-root-spaces-pair-nondegenerately]]).

[L3] $H_\alpha\in\mathfrak h$ satisfies $B(H_\alpha,H)=\alpha(H)$ for all $H\in\mathfrak h$, and $\alpha(H_\alpha)=B(H_\alpha,H_\alpha)\ne0$, so that $h_\alpha=2H_\alpha/\alpha(H_\alpha)$ is defined and $\alpha(h_\alpha)=2$ ([[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]], [[lem-killing-length-of-a-root-is-nonzero]]).

[L4] If $\alpha\in\Phi$ and $\beta\in\Phi\cup\{0\}$, then $\{k\in\mathbb Z:\mathfrak g_{\beta+k\alpha}\ne0\}$ is an interval of consecutive integers $\{-p,\dots,q\}$ with $p,q\ge0$, and $p-q=\beta(h_\alpha)\in\mathbb Z$ ([[thm-root-string-property]], [[cor-cartan-integers-are-integral]]).

[L5] $(E,\Phi)$ is a reduced crystallographic Euclidean root system for the inner product $(\lambda,\mu)=B(H_\lambda,H_\mu)$, in which $2(\beta,\alpha)/(\alpha,\alpha)=\beta(h_\alpha)\in\mathbb Z$ for all roots and the abstract reflection $x\mapsto x-2(x,\alpha)\alpha/(\alpha,\alpha)$ of [[def-reduced-crystallographic-euclidean-root-system]] agrees with $s_\alpha$; $\mathfrak h_{\mathbb R}=\operatorname{span}_{\mathbb R}\{h_\alpha:\alpha\in\Phi\}$ is a real form of $\mathfrak h$ with $\mathfrak h=\mathfrak h_{\mathbb R}\oplus i\mathfrak h_{\mathbb R}$; for a base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ of a positive system the coroots $h_{\alpha_1},\dots,h_{\alpha_r}$ form a basis of $\mathfrak h_{\mathbb R}$; the abstract coroot $\alpha^\vee=2\alpha/(\alpha,\alpha)$ of [[def-coroot-and-dual-root-system]] is the image of $h_\alpha$ under the isomorphism $E\to\mathfrak h_{\mathbb R}$, $\lambda\mapsto H_\lambda$, and $\sum_{\alpha\in\Phi}\mathbb Z\alpha^\vee=\sum_{i=1}^r\mathbb Z\alpha_i^\vee$ ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]], [[def-positive-system-and-base-of-simple-roots]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[L6] For vectors $x,y$ in a real inner product space, $|(x,y)|\le|x|\,|y|$ with equality if and only if $x,y$ are linearly dependent ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[L7] If $(e,f,h)$ satisfy $[e,f]=h$, $[h,e]=2e$ and $[h,f]=-2f$ as in [[def-special-linear-lie-algebra-sl-two]], then every finite-dimensional module is a direct sum of irreducible submodules, and every irreducible nonzero module has an integer $m\ge0$ with weights $m,m-2,\dots,-m$ of $h$, each on a one-dimensional space ([[thm-finite-dimensional-representations-of-sl-two]]).

[L8] For a base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ of $\Phi$ and root $\mathfrak{sl}_2$ triples $(e_i,f_i,h_i)$ with $h_i=h_{\alpha_i}$, the elements $e_i,f_i,h_i$ generate $\mathfrak g$ and satisfy the relations of the Serre Lie algebra $\mathfrak g(A)$ of the Cartan matrix $a_{ij}=\alpha_j(h_i)$ of [[def-cartan-matrix-of-a-based-root-system]], so that the assignment of generators defines an isomorphism $\mathfrak g(A)\to\mathfrak g$; the Axiom of Choice is assumed here ([[thm-serre-presentation-theorem]], [[def-serre-lie-algebra-of-a-finite-type-cartan-matrix]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in\mathfrak g_\alpha$, $y\in\mathfrak g_{-\alpha}$ and $H\in\mathfrak h$. By [L1] $[x,y]\in\mathfrak g_0=\mathfrak h$, and $[y,H]=-[H,y]=\alpha(H)y$ because $y\in\mathfrak g_{-\alpha}$; invariance [L2] therefore gives $B([x,y],H)=B(x,[y,H])=\alpha(H)B(x,y)=B\bigl(B(x,y)H_\alpha,H\bigr)$ by [L3]. As $H\in\mathfrak h$ was arbitrary, $[x,y]-B(x,y)H_\alpha$ is $B$-orthogonal to $\mathfrak h$, hence zero by the nondegeneracy of $B|_{\mathfrak h}$; that is, $[x,y]=B(x,y)H_\alpha$. [L1, L2, L3, algebra]

1.2 (Cartan integers) Let $\alpha,\beta\in\Phi$ be nonproportional and put $n:=\beta(h_\alpha)=2(\alpha,\beta)/(\alpha,\alpha)$ and $n':=\alpha(h_\beta)=2(\alpha,\beta)/(\beta,\beta)$; both are integers by [L4] and [L5]. Then $nn'=4(\alpha,\beta)^2/\bigl((\alpha,\alpha)(\beta,\beta)\bigr)$ is an integer, while Cauchy-Schwarz [L6] and nonproportionality give $0\le(\alpha,\beta)^2<(\alpha,\alpha)(\beta,\beta)$, so $nn'\in\{0,1,2,3\}$. Consequently $n=0$ if and only if $n'=0$; $n'/n=(\alpha,\alpha)/(\beta,\beta)$ whenever $n\ne0$; and $|n|\le3$. [L4, L5, L6, algebra]

2.1 By step 1.1 and [L3], $[x,y]=h_\alpha$ holds for $x\in\mathfrak g_\alpha$, $y\in\mathfrak g_{-\alpha}$ exactly when $B(x,y)=2/(\alpha,\alpha)$, where $(\alpha,\alpha)=B(H_\alpha,H_\alpha)=\alpha(H_\alpha)\ne0$; moreover $B(x,y)\ne0$ for all nonzero $x,y$, because the pairing of [L2] is nondegenerate and both $\mathfrak g_\alpha$ and $\mathfrak g_{-\alpha}$ are one-dimensional by [L1], so that the nonzero functional $B(x,\cdot)$ on the line $\mathfrak g_{-\alpha}$ vanishes only at $0$. [L1, L2, L3, step 1.1, algebra]

2.2 (Strings and their bounds) Let $\alpha,\beta\in\Phi$ with $\alpha+\beta\in\Phi$, let $\{-p,\dots,q\}$ be the $\alpha$-string through $\beta$ (so $q\ge1$ because the index $1$ lies in the string) and let $\{-p',\dots,q'\}$ be the $\beta$-string through $\alpha$ (so $q'\ge1$), as supplied by [L4]; then $n=p-q$ and $n'=p'-q'$ by [L4]. The pair $(\alpha,\beta+q\alpha)$ is nonproportional, since $\beta+q\alpha\in\mathbb R\alpha$ would force $\beta\in\mathbb R\alpha$ and hence $\beta=\pm\alpha$ by the reducedness recorded in [L5], contradicting $\alpha+\beta\in\Phi$ and $\alpha+\beta\ne0$; its Cartan integer is $(\beta+q\alpha)(h_\alpha)=\beta(h_\alpha)+2q=(p-q)+2q=p+q$, so step 1.2 gives $p+q\le3$. The same argument with $\alpha$ and $\beta$ interchanged gives $p'+q'\le3$. [L4, L5, step 1.2, algebra]

3.1 (First normalization) Choose one representative in each pair $\{\alpha,-\alpha\}\subseteq\Phi$ and put $c_\alpha:=1$ for the chosen representatives while $c_{-\alpha}:=2\big/\bigl((\alpha,\alpha)B(e_\alpha^0,e_{-\alpha}^0)\bigr)$ for their negatives, a nonzero number by step 2.1; then $e_\alpha:=c_\alpha e_\alpha^0$ satisfies $[e_\alpha,e_{-\alpha}]=c_\alpha c_{-\alpha}B(e_\alpha^0,e_{-\alpha}^0)H_\alpha=h_\alpha$ for every root $\alpha$ by step 1.1, so (i) of the statement holds for a rescaling of the given basis. [L3, step 1.1, step 2.1, construct]

3.2 (String-length identity) With the notation of step 2.2, $q\,(\alpha+\beta,\alpha+\beta)=(p+1)(\beta,\beta)$. Indeed $q\ge1$, $p\ge0$ and $p+q\le3$ by step 2.2, so $(p,q)$ is one of $(0,1)$, $(1,1)$, $(2,1)$, $(0,2)$, $(1,2)$, $(0,3)$; writing $A=(\alpha,\alpha)$, $P=(\alpha,\beta)$ and $C=(\beta,\beta)$ and using $P=nA/2$ with $n=p-q$, the six cases are as follows. If $(p,q)$ is $(0,1)$ or $(1,2)$, then $n=-1$, so $A+2P=0$ and both sides of the identity equal $qC=(p+1)C$. If $(p,q)=(1,1)$, then $n=0$, so $P=0$ and the identity becomes $A+C=2C$, that is $A=C$, which holds because the Cartan integer $2(\alpha,\alpha+\beta)/(\alpha+\beta,\alpha+\beta)=2A/(A+C)$ lies in $\mathbb Z$ by [L5] and in the open interval $(0,2)$, hence equals $1$. If $(p,q)=(2,1)$, then $n=1$, so $P=A/2$ and the identity becomes $A+2P=2C$, that is $A=C$; here $n'=2P/C>0$ satisfies $n'\in\{1,2,3\}$ by step 1.2 and also $n'=p'-q'\le p'+q'-2\le1$ by step 2.2, so $n'=1$ and $C=2P=A$. If $(p,q)=(0,2)$, then $n=-2$ while $n'/n=A/C>0$ gives $n'<0$, so $nn'\in\{0,1,2,3\}$ of step 1.2 forces $n'=-1$, hence $C=nA/n'=2A$ and $P=nA/2=-A$, and the identity becomes $2(A+2P+C)=2(A-2A+2A)=2A=C$. If $(p,q)=(0,3)$, then $n=-3$ and again $n'<0$ with $nn'\in\{0,1,2,3\}$, so $n'=-1$, hence $C=3A$ and $P=-3A/2$, and the identity becomes $3(A+2P+C)=3(A-3A+3A)=3A=C$. [L5, step 1.2, step 2.2, algebra]

3.3 (The string module is irreducible) Keep the notation of step 2.2 and put $V:=\bigoplus_{i=-p}^{q}\mathfrak g_{\beta+i\alpha}$. By [L1] the brackets with $e_\alpha$ and $e_{-\alpha}$ shift the index $i$ by $\pm1$ and vanish past the ends of the string, while $h_\alpha$ preserves each weight space $\mathfrak g_{\beta+i\alpha}$, on which it acts by the scalar $\beta(h_\alpha)+2i$; hence $V$ is a finite-dimensional module for the triple $(e_\alpha,e_{-\alpha},h_\alpha)$ of [L7]. Its weights are $\beta(h_\alpha)+2i=p-q+2i$ for $i=-p,\dots,q$, that is the arithmetic progression $-(p+q),-(p+q)+2,\dots,p+q$, each occurring on a one-dimensional space by [L1]. A decomposition of $V$ into irreducibles [L7] has distinct highest weights, because every weight space is one-dimensional, and the top weight $m:=p+q$ occurs exactly once; the irreducible summand of highest weight $m$ has all the weights $m,m-2,\dots,-m$ with multiplicity one, so it exhausts the weight multiset of $V$, and $V$ itself is irreducible of highest weight $m$. [L1, L4, L7, step 2.2, algebra]

4.1 Any further rescaling $e_\alpha\mapsto t_\alpha e_\alpha$ with nonzero $t_\alpha$ satisfies $[t_\alpha e_\alpha,t_{-\alpha}e_{-\alpha}]=t_\alpha t_{-\alpha}h_\alpha$ by step 3.1, so it preserves the relations (i) exactly when $t_\alpha t_{-\alpha}=1$ for all $\alpha$. [step 3.1, algebra]

4.2 (Base and generators) Let $\Delta=\{\alpha_1,\dots,\alpha_r\}$ be the base of a positive system of $(E,\Phi)$; such a base exists because regular vectors exist ([[def-positive-system-and-base-of-simple-roots]]) and it is a basis of $E$ by [L5]. Put $e_i:=e_{\alpha_i}$ and $f_i:=e_{-\alpha_i}$ for the vectors of step 3.1. Then $[e_i,f_i]=h_{\alpha_i}=h_i$, while $[h_i,e_i]=\alpha_i(h_i)e_i=2e_i$ and $[h_i,f_i]=-2f_i$ by [L1] and $\alpha_i(h_i)=2$ of [L3]; thus $(e_i,f_i,h_i)$ is a root $\mathfrak{sl}_2$ triple with $h_i$ the coroot of $\alpha_i$. [L1, L3, L5, step 3.1]

4.3 (Coefficients along the string) Let $v:=e_{\beta+q\alpha}\ne0$. By step 3.3 the vector $v$ is a highest weight vector: $[e_\alpha,v]\in\mathfrak g_{\beta+(q+1)\alpha}=0$ by [L1] and the maximality of $q$. Since the weight spaces of $V$ are one-dimensional, for each $i\in\{-p,\dots,q\}$ there are nonzero $c_i\in\mathbb C$ with $e_{\beta+i\alpha}=c_i f^{q-i}v$, where $f:=e_{-\alpha}$, and $c_q=1$. Induction on $k\ge1$, using $[e,f]=h_\alpha$, $[h_\alpha,f]=-2f$ and $[h_\alpha,v]=mv$ with $e:=e_\alpha$, gives $[e,f^kv]=k(m-k+1)f^{k-1}v$; hence for $-p\le i\le q-1$ we get $[e,e_{\beta+i\alpha}]=c_i(q-i)(p+i+1)f^{q-i-1}v$, that is $N_{\alpha,\beta+i\alpha}=(c_i/c_{i+1})(q-i)(p+i+1)$. [L1, L7, step 3.3, algebra]

5.1 (Chevalley involution) The assignment $e_i\mapsto-f_i$, $f_i\mapsto-e_i$, $h_i\mapsto-h_i$ preserves the relations of the Serre algebra of [L8]: it fixes the relations $[h_i,h_j]=0$ up to sign, interchanges the relations $[h_i,e_j]=a_{ij}e_j$ and $[h_i,f_j]=-a_{ij}f_j$, preserves $[e_i,f_j]=\delta_{ij}h_i$ in the form $[f_i,e_j]=-\delta_{ij}h_i$, and sends the Serre relations $(\operatorname{ad}e_i)^{1-a_{ij}}e_j=0$ and $(\operatorname{ad}f_i)^{1-a_{ij}}f_j=0$ into each other, because $(\operatorname{ad}(-f_i))^{1-a_{ij}}(-f_j)=\pm(\operatorname{ad}f_i)^{1-a_{ij}}f_j$ and $(\operatorname{ad}(-e_i))^{1-a_{ij}}(-e_j)=\pm(\operatorname{ad}e_i)^{1-a_{ij}}e_j$ both vanish. By the universal property of the presented algebra $\mathfrak g(A)$ ([[def-lie-algebra-presented-by-generators-and-relations]]), this relation-preserving assignment extends to a Lie algebra homomorphism $\omega_A$; it is bijective because $\omega_A^2$ fixes the generators $e_i,f_i,h_i$ of $\mathfrak g(A)$ and hence equals $\operatorname{id}$, so $\omega_A$ is an automorphism. Transported through the isomorphism $\mathfrak g(A)\to\mathfrak g$ of [L8], it defines an automorphism $\omega$ of $\mathfrak g$ with $\omega^2=\operatorname{id}_{\mathfrak g}$, $\omega(e_i)=-f_i$, $\omega(f_i)=-e_i$ and $\omega(h_i)=-h_i$. [L8, step 4.2, algebra]

5.2 (The opposite string) Applying steps 3.3 and 4.3 to the pair $(-\beta,\alpha)$ in place of $(\beta,\alpha)$ — the $\alpha$-string through $-\beta$ is $\{-\beta-j\alpha:-p\le j\le q\}$, because $-\beta-j\alpha=-(\beta+j\alpha)$ — produces a highest weight vector $w:=e_{-\beta+p\alpha}$ and nonzero $c_j'$ with $e_{-\beta-j\alpha}=c_j'f^{p+j}w$ and $c_{-p}'=1$; here the bracket with $e_{-\alpha}=f$ lowers the $f$-power without an extra coefficient, so $N_{-\alpha,-\beta-j\alpha}=c_j'/c_{j+1}'$ for $-p\le j\le q-1$. [L1, step 3.3, step 4.3, algebra]

6.1 Since $\omega(h_i)=-h_i$ for all $i$ and the $h_i=h_{\alpha_i}$ form a basis of $\mathfrak h$ by [L5], $\omega$ acts as $-\operatorname{id}$ on $\mathfrak h$. If $x\in\mathfrak g_\alpha$ and $H\in\mathfrak h$, then $[H,\omega x]=[\omega(-H),\omega x]=\omega([-H,x])=-\alpha(H)\omega x$, so $\omega x\in\mathfrak g_{-\alpha}$; as $\omega$ is bijective, $\omega(\mathfrak g_\alpha)=\mathfrak g_{-\alpha}$ for every root $\alpha$. In particular each $\omega(e_\alpha)$ is a nonzero element of the line $\mathfrak g_{-\alpha}$, say $\omega(e_\alpha)=c_\alpha e_{-\alpha}$ with $c_\alpha\in\mathbb C^\times$, and applying $\omega$ twice gives $c_\alpha c_{-\alpha}=1$. [L1, L5, step 5.1, algebra]

6.2 (Pairing of the two strings) By the invariance of $B$, $B(fx,y)=-B(x,fy)$ for all $x,y\in\mathfrak g$ [L2]. Applying this $q-i$ times and using $B(\mathfrak g_\gamma,\mathfrak g_\delta)=0$ unless $\gamma+\delta=0$ [L2] together with the weights of $v$ and $w$ gives $B(e_{\beta+i\alpha},e_{-\beta-i\alpha})=c_ic_i'(-1)^{q-i}B(v,f^mw)$, and $f^mw=(c_q')^{-1}e_{-\beta-q\alpha}$ because $e_{-\beta-j\alpha}=c_j'f^{p+j}w$ at $j=q$. Also $B(e_\gamma,e_{-\gamma})=2/(\gamma,\gamma)$ for every root $\gamma$: by step 1.1 the bracket $[e_\gamma,e_{-\gamma}]$ equals both $B(e_\gamma,e_{-\gamma})H_\gamma$ and, by (i), the coroot $h_\gamma=2H_\gamma/(\gamma,\gamma)$ of [L3]. Comparing the two expressions for $B(e_{\beta+i\alpha},e_{-\beta-i\alpha})$ therefore gives $c_ic_i'(-1)^{q-i}(c_q')^{-1}/(\beta+q\alpha,\beta+q\alpha)=1/(\beta+i\alpha,\beta+i\alpha)$, that is $c_ic_i'=(-1)^{q-i}c_q'(\beta+q\alpha,\beta+q\alpha)/(\beta+i\alpha,\beta+i\alpha)$. [L1, L2, L3, step 1.1, step 4.3, step 5.2, algebra]

7.1 (Second normalization) By step 4.1 the rescalings with $t_\alpha t_{-\alpha}=1$ are exactly those preserving (i). Choose $t_\alpha\in\mathbb C^\times$ with $t_\alpha^2=-1/c_\alpha$ for the numbers $c_\alpha\ne0$ of step 6.1 and put $t_{-\alpha}:=1/t_\alpha$, so that $t_\alpha t_{-\alpha}=1$. For $e_\alpha'':=t_\alpha e_\alpha$ we then have $[e_\alpha'',e_{-\alpha}'']=h_\alpha$ by step 4.1, and $\omega(e_\alpha'')=t_\alpha c_\alpha e_{-\alpha}=t_\alpha c_\alpha t_\alpha e_{-\alpha}''=c_\alpha t_\alpha^2e_{-\alpha}''=-e_{-\alpha}''$, because $t_\alpha t_{-\alpha}=1$ gives $e_{-\alpha}=t_\alpha e_{-\alpha}''$ and because $c_\alpha t_\alpha^2=-1$. [step 4.1, step 6.1, choose, algebra]

7.2 (Chevalley's identity) Dividing the relation of step 6.2 for the indices $i$ and $i+1$, the unknown $c_q'$ cancels and the sign flips, so $c_ic_i'/(c_{i+1}c_{i+1}')=-(\beta+(i+1)\alpha,\beta+(i+1)\alpha)/(\beta+i\alpha,\beta+i\alpha)$; multiplying by the coefficient formulas of steps 4.3 and 5.2 gives $N_{\alpha,\beta+i\alpha}N_{-\alpha,-\beta-i\alpha}=-(q-i)(p+i+1)\frac{(\beta+(i+1)\alpha,\beta+(i+1)\alpha)}{(\beta+i\alpha,\beta+i\alpha)}=-(p+i+1)^2$, the last equality by the string-length identity 3.2 applied to the pair $(\alpha,\beta+i\alpha)$, whose string is $\beta+i\alpha+n\alpha$ for $-p-i\le n\le q-i$; in particular, at $i=0$, $N_{\alpha\beta}N_{-\alpha,-\beta}=-(p+1)^2$. [step 3.2, step 4.3, step 5.2, step 6.2, algebra]

8.1 (Sign relation) Let $\alpha,\beta\in\Phi$ with $\alpha+\beta\in\Phi$. Applying $\omega$ to $[e_\alpha'',e_\beta'']=N_{\alpha\beta}e_{\alpha+\beta}''$ and using $\omega(e_\gamma'')=-e_{-\gamma}''$ for all $\gamma$ gives $[e_{-\alpha}'',e_{-\beta}'']=N_{\alpha\beta}(-e_{-\alpha-\beta}'')$, that is $N_{-\alpha,-\beta}=-N_{\alpha\beta}$; when $\alpha+\beta\notin\Phi\cup\{0\}$ both brackets $[e_\alpha'',e_\beta'']$ and $[e_{-\alpha}'',e_{-\beta}'']$ vanish by [L1], so $N_{\alpha\beta}=N_{-\alpha,-\beta}=0$. Hence $N_{\alpha\beta}=-N_{-\alpha,-\beta}$ for all $\alpha,\beta\in\Phi$ with $\alpha+\beta\ne0$, which is (ii) of the statement, the excluded case $\beta=-\alpha$ being the one in which the constants are not defined. [L1, step 5.1, step 7.1, algebra]

9.1 (Integrality) The product $N_{\alpha\beta}N_{-\alpha,-\beta}$ is unchanged by the rescaling of step 7.1: that rescaling replaces $N_{\alpha\beta}$ by $(t_\alpha t_\beta/t_{\alpha+\beta})N_{\alpha\beta}$ and $N_{-\alpha,-\beta}$ by $(t_{-\alpha}t_{-\beta}/t_{-\alpha-\beta})N_{-\alpha,-\beta}=(t_{\alpha+\beta}/(t_\alpha t_\beta))N_{-\alpha,-\beta}$, because $t_\gamma t_{-\gamma}=1$, so the product is multiplied by $1$. Hence step 7.2 gives $N_{\alpha\beta}N_{-\alpha,-\beta}=-(p+1)^2$ also for the vectors $e_\alpha''$ of step 7.1, and combining this with $N_{-\alpha,-\beta}=-N_{\alpha\beta}$ of step 8.1 gives $N_{\alpha\beta}^2=(p+1)^2$, so $N_{\alpha\beta}=\pm(p+1)$ for all $\alpha,\beta\in\Phi$ with $\alpha+\beta\in\Phi$; this is (iii) of the statement, and together with the convention $N_{\alpha\beta}=0$ otherwise it shows that all constants $N_{\alpha\beta}$ are integers. Moreover each $e_\alpha''=t_\alpha c_\alpha e_\alpha^0$ is a nonzero complex multiple of the given vector $e_\alpha^0$, so the family produced is obtained from the given root-vector basis by rescaling, as required. [step 7.2, step 8.1, algebra]

10.1 (Real form and integral structure) Let $\mathfrak g_0:=\operatorname{span}_{\mathbb R}\{h_\alpha,e_\alpha'':\alpha\in\Phi\}$. It is closed under brackets: $[\mathfrak h_{\mathbb R},\mathfrak h_{\mathbb R}]=0$; $[h_\alpha,e_\beta'']=\beta(h_\alpha)e_\beta''$ with $\beta(h_\alpha)\in\mathbb Z$ by [L4]; $[e_\alpha'',e_\beta'']=N_{\alpha\beta}e_{\alpha+\beta}''$ with $N_{\alpha\beta}\in\mathbb Z$ by step 9.1; $[e_\alpha'',e_{-\alpha}'']=h_\alpha$; and all brackets with $\alpha+\beta\notin\Phi\cup\{0\}$ vanish by [L1]. Since $\mathfrak h=\mathfrak h_{\mathbb R}\oplus i\mathfrak h_{\mathbb R}$ by [L5] and the vectors $e_\alpha''$ form a basis of $\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$, we get $\mathfrak g=\mathfrak g_0\oplus i\mathfrak g_0$, so that $\mathfrak g_0$ is a real form of $\mathfrak g$. With respect to the basis $\{h_{\alpha_1},\dots,h_{\alpha_r}\}\cup\{e_\alpha''\}$ the structure constants are integers, because $h_\alpha\in\sum_i\mathbb Z h_{\alpha_i}$ by the coroot-lattice statement of [L5]; and for $H\in\mathfrak h_{\mathbb R}$ the operators $\operatorname{ad}_H$ are diagonalizable over $\mathbb R$ with eigenvalues $\alpha(H)\in\mathbb R$ by [L1] and [L5]. Hence $\mathfrak g_0$ is a split real form of $\mathfrak g$. [L1, L4, L5, step 9.1, algebra]

11.1 (Dual normalization) Put $\lambda_\alpha=\bigl((\alpha,\alpha)/2\bigr)^{1/2}>0$, a positive real number, and $X_\alpha:=\lambda_\alpha e_\alpha''$ for all $\alpha$; then also $X_{-\alpha}=\lambda_\alpha e_{-\alpha}''$, because $\lambda_{-\alpha}=\lambda_\alpha$. By step 3.1 and (i), $[X_\alpha,X_{-\alpha}]=\lambda_\alpha^2h_\alpha=\frac{(\alpha,\alpha)}2\cdot\frac{2H_\alpha}{(\alpha,\alpha)}=H_\alpha$ and $B(X_\alpha,X_{-\alpha})=\lambda_\alpha^2\cdot 2/(\alpha,\alpha)=1$. Hence for $\alpha+\beta\in\Phi$ the constants defined by $[X_\alpha,X_\beta]=C_{\alpha\beta}X_{\alpha+\beta}$ are $C_{\alpha\beta}=(\lambda_\alpha\lambda_\beta/\lambda_{\alpha+\beta})N_{\alpha\beta}$, real numbers because $\lambda_\gamma$ and $N_{\alpha\beta}=\pm(p+1)$ are real; and $C_{\alpha\beta}=-C_{-\alpha,-\beta}$ because $\lambda_{-\gamma}=\lambda_\gamma$ and $N_{\alpha\beta}=-N_{-\alpha,-\beta}$. [L3, step 3.1, step 8.1, step 9.1, algebra] ∎
