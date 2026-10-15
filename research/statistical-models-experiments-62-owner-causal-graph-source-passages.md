# https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf

Read full relevant units §2-1/§2-2/§3-1/§3-2 (printed pp. 671–676), entire Theorem3 appendix (686–687), and discussion Lemmas1–2/theorem (701–702). Moralization/global-Markov are stated, not fully proved in this source; no full graph proof is falsely claimed. Local proofs supplied independently.

## PDF page 3

Causal diagrams for empirical research 
671
(c) Consistent estimation of the total effect of X on Y would not be feasible if Y were
confounded with Z^; however, confounding Z^ and Twill not invalidate the formula
forpr(y|x).
These conclusions can be obtained either by analysing the graphical properties of the
diagram, or by performing a sequence of symbolic derivations, governed by the diagram,
which gives rise to causal effect formulae such as (1).
The formal semantics of the causal diagrams used in this paper will be defined in § 2,
following a review of directed acyclic graphs as a language for communicating conditional
independence assumptions. Section 2-2 introduces a causal interpretation of directed
graphs based on nonparametric structural equations and demonstrates their use in pre-
dicting the effect of interventions. Section 3 demonstrates the use of causal diagrams to
control confounding bias in observational studies. We establish two graphical conditions
ensuring that causal effects can be estimated consistently from nonexperimental data. The
first condition, named the back-door criterion, is equivalent to the ignorability condition
of Rosenbaum & Rubin (1983). The second condition, named the front-door criterion,
involves covariates that are affected by the treatment, and thus introduces new opportunit-
ies for causal inference. In § 4, we introduce a symbolic calculus that permits the stepwise
derivation of causal effect formulae of the type shown in (1). Using this calculus, §5
characterises the class of graphs that permit the quantification of causal effects from
nonexperimental data, or from surrogate experimental designs.
2. GRAPHICAL MODELS AND THE MANIPULATIVE ACCOUNT OF CAUSATION
2-1. Graphs and conditional independence
The usefulness of directed acyclic graphs as economical schemes for representing con-
ditional independence assumptions is well evidenced in the literature (Pearl, 1988;
Whittaker, 1990). It stems from the existence of graphical methods for identifying the
conditional independence relationships implied by recursive product decompositions
pr(xi,..., xj == ]~[ Pr(x, | pa,), 
(2)
i
where pa; stands for the realisation of some subset of the variables that precede X, in the
order (X^, X^,..., X^). If we construct a directed acyclic graph in which the variables
corresponding to pa, are represented as the parents of-Y,, also called adjacent predecessors
or direct influences of X,, then the independencies implied by the decomposition (2) can
be read off the graph using the following test.
DEFINITION 1 (d-separation). Let X, Y and Z be three disjoint subsets of nodes in a
directed acyclic graph G, and let p be any path between a node in X and a node in Y, where
by 'path' we mean any succession of arcs, regardless of their directions. Then Z is said to
block p if there is a node w on p satisfying one of the following two conditions: (i) w has
converging arrows along p, and neither w nor any of its descendants are in Z, or, («') w does
not have converging arrows along p, and w is in Z. Further, Z is said to d-separate X from
Y, in G, written (XILY\Z)G, if and only if Z blocks every path from a node in X to a node
in Y.
It can be shown that there is a one-to-one correspondence between the set of conditional
independencies -X"1LY|Z (Dawid, 1979) implied by the recursive decomposition (2), and
the set of triples (X, Z, Y) that satisfy the a-separation criterion in G (Geiger, Verma &
Pearl, 1990).


## PDF page 4

672 
JUDEA PEARL
An alternative test for ^-separation has been given by Lauritzen et al. (1990). To test
for (XALY\Z)a, delete from G all nodes except those in XUYUZ and their ancestors,
connect by an edge every pair of nodes that share a common child, and remove all arrows
from the arcs. Then (XAL Y\Z)(} holds if and only if Z is a cut-set of the resulting undirected
graph, separating nodes of X from those of Y. Additional properties of directed acyclic
graphs and their applications to evidential reasoning in expert systems are discussed by
Pearl (1988), Lauritzen & Spiegelhalter (1988), Spiegelhalter et al. (1993) and Pearl
(1993a).
2-2. Graphs as models a/interventions
The use of directed acyclic graphs as carriers of independence assumptions has also
been instrumental in predicting the effect of interventions when these graphs are given a
causal interpretation (Spirtes, Glymour & Schemes, 1993, p. 78; Pearl, 1993b). Pearl
(1993b), for example, treated interventions as variables in an augmented probability space,
and their effects were obtained by ordinary conditioning.
In this paper we pursue a different, though equivalent, causal interpretation of directed
graphs, based on nonparametric structural equations, which owes its roots to early works
in econometrics (Frisch, 1938; Haaveimo, 1943; Simon, 1953). In this account, assertions
about causal influences, such as those specified by the links in Fig. 1, stand for autonomous
physical mechanisms among the corresponding quantities, and these mechanisms are rep-
resented as functional relationships perturbed by random disturbances. In other words,
each child-parent family in a directed graph G represents a deterministic function
Xi = fi(pa.i, e.) (i = 1,..., n), 
(3)
where pa, denote the parents of variable -Y, in G, and e, (1 ^ i ^ n) are mutually indepen-
dent, arbitrarily distributed random disturbances (Pearl & Verma, 1991). These disturb-
ance terms represent exogenous factors that the investigator chooses not to include in the
analysis. If any of these factors is judged to be influencing two or more variables, thus
violating the independence assumption, then that factor must enter the analysis as an
unmeasured, or latent, variable, to be represented in the graph by a hollow node, such as
Zo or B in Fig. 1. For example, the causal assumptions conveyed by the model in Fig. 1
correspond to the following set of equations:
Zo=/o(£o), 
Z2=/2(^,Zi,£2), 
B=f»(Zo,£s), 
Z3=/3(B,Z2,63),
(4)
Zi=/i(Zo,£i), y==/y(^.Z2,Z3,£y), X=f^Zo,e^).
The equational model (3) is the nonparametric analogue of a structural equations model
(Wright, 1921; Goldberger, 1972), with one exception: the functional form of the equations,
as well as the distribution of the disturbance terms, will remain unspecified. The equality
signs in such equations convey the asymmetrical counterfactual relation 'is determined
by', forming a clear correspondence between causal diagrams and Rubin's model of poten-
tial outcome (Rubin, 1974; Holland, 1988; Pratt & Schlaifer, 1988; Rubin, 1990). For
example, the equation for Y states that, regardless of what we currently observe about Y,
and regardless of any changes that might occur in other equations, if (-X", Z^, Zy, gy) were
to assume the values (x, z^,Zy, £y), respectively, Y would take on the value dictated by the
function /y. Thus, the corresponding potential response variable in Rubin's model Y^),
the value that Y would take if X were x, becomes a deterministic function of Za, Z3 and


## PDF page 5

Causal diagrams/or empirical research 
673
fiy, whose distribution is thus determined by those of Z^, Zy and £y. The relation between
graphical and counterfactual models is further analysed by Pearl (1994a).
Characterising each child-parent relationship as a deterministic function, instead of by
the usual conditional probability pr(x,|pa,), imposes equivalent independence constraints
on the resulting distributions, and leads to the same recursive decomposition (2) that
characterises directed acyclic graph models. This occurs because each e, is independent of
all nondescendants of X,. However, the functional characterisation -Y,==/,(pfl,,e,) also
provides a convenient language for specifying how the resulting distribution would change
in response to external interventions. This is accomplished by encoding each intervention
as an alteration to a selected subset of functions, while keeping the others intact. Once
we know the identity of the mechanisms altered by the intervention, and the nature of
the alteration, the overall effect can be predicted by modifying the corresponding equations
in the model, and using the modified model to compute a new probability function.
The simplest type of external intervention is one in which a single variable, say Xi, is
forced to take on some fixed value x,. Such an intervention, which we call atomic, amounts
to lifting X, from the influence of the old functional mechanism X, =./;•( pa,, e,) and placing
it under the influence of a new mechanism that sets its value to x, while keeping all
other mechanisms unperturbed. Formally, this atomic intervention, which we denote by
set(-Y, = Xi), or set(;)c,) for short, amounts to removing the equation -X",==y,-(pa,, e,) from
the model, and substituting x, for -X, in the remaining equations. The model thus created
represents the system's behaviour under the intervention set(X, = x,) and, when solved for
the distribution of X j , yields the causal effect of -X', on X j , denoted by pr(x^-|x,). More
generally, when an intervention forces a subset X of variables to fixed values x, a subset
of equations is to be pruned from the model given in (3), one for each member of X, thus
defining a new distribution over the remaining variables, which completely characterises
the effect of the intervention. We thus introduce the following.
DEFINITION 2 (causal effect). Given two disjoint sets of variables, X and Y, the causal
effect o f X on Y, denoted pr(y \ x), is a function from X to the space of probability distributions
on Y. For each realisation x o f X , pr(y|x) gives the probability o f Y = y induced on deleting
from the model (3) all equations corresponding to variables in X and substituting x for X
in the remainder.
An explicit translation of intervention into 'wiping out' equations from the model was
first proposed by Strotz & Wold (1960), and used by Fisher (1970) and Sobel (1990).
Graphical ramifications were explicated by Spirtes et al. (1993) and Pearl (1993b). A
related mathematical model using event trees has been introduced by Robins (1986,
pp. 1422-5).
Regardless of whether we represent interventions as a modification of an existing model
as in Definition 2, or as a conditionalisation in an augmented model (Pearl, 1993b), the
result is a well-defined transformation between the pre-intervention and the post-inter-
vention distributions. In the case of an atomic intervention set(X, = x;), this transformation
can be expressed in a simple algebraic formula that follows immediately from (3) and
Definition 2:
/ 
, .,„ 
f{pr(xi,...,x,,)}/{pr(x,|pa,-)} ifx,=x;,
pr(Xi,... ,x^\Xi)= i 
(3)
[0 
ifx;=|=x,'.
This formula reflects the removal of the terms pr(x,|pa,) from the product in (2), since pa,
no longer influence X,. Graphically, this is equivalent to removing the links between pa,


## PDF page 6

674 
JUDEA PEARL
and X{ while keeping the rest of the network intact. Equation (5) can also be obtained
from the G-computation formula of Robins (1986, p. 1423) and the Manipulation Theorem
of Spirtes et al. (1993), who state that this formula was 'independently conjectured by
Fienberg in a seminar in 1991'. Clearly, an intervention set(.x:,) can affect only the descend-
ants of X, in G. Additional properties of the transformation defined in (5) are given by
Pearl (1993b).
The immediate implication of (5) is that, given a causal diagram in which all parents
of manipulated variables are observable, one can infer post-intervention distributions from
pre-intervention distributions; hence, under such assumptions we can estimate the effects
of interventions from passive, i.e. nonexperimental observations. The aim of this paper,
however, is to derive causal effects in situations such as Fig. 1, where some members of
pa, may be unobservable, thus preventing estimation of pr(;>c,|pa,). The next two sections
provide simple graphical tests for deciding when pr(x,|x,) is estimable in a given model.
3. CONTROLLING CONFOUNDING BIAS
3-1. The back-door criterion
Assume we are given a causal diagram G together with nonexperimental data on a
subset VQ of observed variables in G, and we wish to estimate what effect the intervention
set(-Y, = x,) would have on some response variable Xj. In other words, we seek to estimate
pT(Xj\x,i) from a sample estimate ofpr(Fo).
The variables in Vo\{X,, Xj}, are commonly known as concomitants (Cox, 1958, p. 48).
In observational studies, concomitants are used to reduce confounding bias due to spurious
correlations between treatment and response. The condition that renders a set Z of con-
comitants sufficient for identifying causal effect, also known as ignorability, has been given
a variety of formulations, all requiring conditional independence judgments involving
counterfactual variables (Rosenbaum & Rubin, 1983; Pratt & Schlaifer, 1988). Pearl
(1993b) shows that such judgments are equivalent to a simple graphical test, named the
'back-door criterion', which can be applied directly to the causal diagram.
DEFINITION 3 (Back-door criterion). A set of variables Z satisfies the back-door criterion
relative to an ordered pair of variables (X,, Xj) in a directed acyclic graph G if: (i) no node
in Z is a descendant of Xi, and («') Z blocks every path between X, and X j which contains
an arrow into X,. If X and Y are two disjoint sets of nodes in G, Z is said to satisfy the
back-door criterion relative to (X, Y) if it satisfies it relative to any pair (-Y,, Xj) such that
X, e X and X; e Y.
The name 'back-door' echoes condition (ii), which requires that only paths with arrows
pointing at X, be blocked; these paths can be viewed as entering X, through the back door.
In Fig. 2, for example, the sets Z^={X^,X^} and Z^={X^,X^ meet the back-
door criterion, but Z^={X^} does not, because X^ does not block the path
(X,, Xy, Xi, Xi, X^, Xs, Xj). An equivalent, though more complicated, graphical criterion
is given in Theorem 7.1 of Spirtes et al. (1993). An alternative criterion using a single
d-separation test will be established in § 4-4.
We summarise this finding in a theorem, after formally defining 'identifiability'.
DEFINITION 4 (Identifiability). The causal effect o f X on Y is said to be identifiable if the
quantity pr(y\x) can be computed uniquely from any positive distribution of the observed
variables that is compatible with G. 
;-


## PDF page 7

Causal diagrams/or empirical research
X,
675
Fig. 2. A diagram representing the back-door criterion;
adjusting for variables {X^X^} or {^4,^5} yields a
consistent estimate ofpr(Xj|x,).
Identifiability means that pr(y|;!c) can be estimated consistently from an arbitrarily large
sample randomly drawn from the joint distribution. To prove nonidentifiability, it is
sufficient to present two sets of structural equations, both complying with (3), that induce
identical distributions over observed variables but different causal effects.
THEOREM 1. If a set of variables Z satisfies the back-door criterion relative to (X, Y),
then the causal effect of X on Y is identifiable and is given by the formula
pr(^|x)=^pr(^|x,z)pr(z). 
(6)
z
Equation (6) represents the standard adjustment for concomitants Z when X is con-
ditionally ignorable given Z (Rosenbaum & Rubin, 1983). Reducing ignorability con-
ditions to the graphical criterion of Definition 3 replaces judgments about counterfactual
dependencies with systematic procedures that can be applied to causal diagrams of any
size and shape. The graphical criterion also enables the analyst to search for an optimal
set of concomitants, to minimise measurement cost or sampling variability.
3-2. The front-door criteria
An alternative criterion, 'the front-door criterion', may be applied in cases where we
cannot find observed covariates Z satisfying the back-door conditions. Consider the dia-
gram in Fig. 3. Although Z does not satisfy any of the back-door conditions, measurements
ofZ nevertheless enable consistent estimation ofpi(y\x). This can be shown by reducing
the expression for pr(y | x) to formulae computable from the observed distribution function
pr(x, y, z).
„—^ U (Unobserved)
•^————.————^.,
X 
Z 
r
Fig. 3. A diagram representing the front-door criterion.


## PDF page 8

676 
JUDEA PEARL
The joint distribution associated with Fig. 3 can be decomposed into
pr(x, y, z, u) = pr(w) pr(x | M) pr(z | x) pT(y | z, u) 
(7)
and, from (5), the causal effect of X on Y is given by
pr(y\x)=^pr(y\x,u)pr(u): 
(8)
u
Using the conditional independence assumptions implied by the decomposition (7), we
can eliminate u from (8) to obtain
prW) = Z Pr(2|x) S pr(^|x', z) pr(x'). 
(9)
Z, 
x'
We summarise this result by a theorem.
THEOREM 2. Suppose a set of variables Z satisfies the/allowing conditions relative to an
ordered pair of variables (X, Y): (i) Z intercepts all directed paths from X to Y, (if) there is
no back-door path between X and Z, and (Hi) every back-door path between Z and Y is
blocked by X. Then the causal effect of X on Y is identifiable and is given by (9).
The graphical criterion of Theroem 2 uncovers many new structures that permit the
identification of causal effects from measurements of variables that are affected by treat-
ments: see § 5-2. The relevance of such structures in practical situations can be seen, for
instance, if we identify X with smoking, Y with lung cancer, Z with the amount of tar
deposited in a subject's lungs, and U with an unobserved carcinogenic genotype that,
according to some, also induces an inborn craving for nicotine. In this case, (9) would
provide us with the means to quantify, from nonexperimental data, the causal effect of
smoking on cancer, assuming, of course, that pr(x, y, z) is available and that we believe
that smoking does not have any direct effect on lung cancer except that mediated by tar
deposits.
4. A CALCULUS OF INTERVENTION
4-1. General
This section establishes a set of inference rules by which probabilistic sentences involving
interventions and observations can be transformed into other such sentences, thus provid-
ing a syntactic method of deriving or verifying claims about interventions. We shall assume
that we are given the structure of a causal diagram G in which some of the nodes are
observable while the others remain unobserved. Our main problem will be to facilitate
the syntactic derivation of causal effect expressions of the form pr(3/|x), where X and Y
denote sets of observed variables. By derivation we mean step-wise reduction of the
expression pv(y \ x) to an equivalent expression involving standard probabilities of observed
quantities. Whenever such reduction is feasible, the causal effect of X on 7 is identifiable:
see Definition 4.
4-2. Preliminary notation
Let X, Y and Z be arbitrary disjoint sets of nodes in a directed acyclic graph G. We
denote by Gjr the graph obtained by deleting from G all arrows pointing to nodes in X.
Likewise, we denote by Gy the graph obtained by deleting from G all arrows emerging
from nodes in X. To represent the deletion of both incoming and outgoing arrows, we


## PDF page 18

686 
JUDEA PEARL
operational meaning of the so-called 'disturbance term', £y, is likewise demystified: £y is
defined as the difference y—£(y|sy); two disturbance terms, Sjc and £y, are correlated if
pr(y\x, Sjry)+ pr(y\x, s;ry); and so on.
The distinctions provided by the 'check' notation clarify the empirical basis of structural
equations and should make causal models more acceptable to empirical researchers.
Moreover, since most scientific knowledge is organised around the operation of 'holding
X fixed', rather than 'conditioning on X\ the notation and calculus developed in this
paper should provide an effective means for scientists to communicate subject-matter
information, and to infer its logical consequences when combined with statistical data.
ACKNOWLEDGEMENT
Much of this investigation was inspired by Spirtes et al. (1993), in which a graphical
account of manipulations was first proposed. Phil Dawid, David Freedman, James Robins
and Donald Rubin have provided genuine encouragement and valuable advice. The inves-
tigation also benefitted from discussions with Joshua Angrist, Peter Bentler, David Cox,
Arthur Dempster, David Galles, Arthur Goldberger, Sander Greenland, David Hendry,
Paul Holland, Guido Imbens, Ed Learner, Rod McDonald, John Pratt, Paul Rosenbaum,
Keunkwan Ryu, Glenn Shafer, Michael Sobel, David Tritchler and Nanny Wermuth. The
research was partially supported by grants from Air Force Office of Scientific Research
and National Science Foundation.
APPENDIX
Proof of Theorem 3
(i) Rule 1 follows from the fact that deleting equations from the model in (8) results, again, in
a recursive set of equations in which all s, terms are mutually independent. The d-separation
condition is valid for any recursive model, hence it is valid for the submodel resulting from del-
eting the equations for X. Finally, since the graph characterising this submodel is given by
Gjp, (y-ULZ|X, W)GX implies the conditional independence pr(v|x,z, w)==pr(y|x,w) in the post-
intervention distribution.
(ii) The graph G^i differs from Gs only in lacking the arrows emanating from Z, hence it retains
all the back-door paths from Z to V that can be found in G;?. The condition (YALZ\X, W)o^
ensures that all back-door paths from Z to Y in Gjp are blocked by {X, W}. Under such conditions,
setting Z = z or conditioning on Z = z has the same effect on Y. This can best be seen from the
augmented diagram G's, to which the intervention arcs Fz-*Z were added, where F, stands for
the functions that determine Z in the structural equations (Pearl, 1993b). If all back-door paths
from Fz to y are blocked, the remaining paths from Fz to Y must go through the children of Z,
hence these paths will be blocked by Z. The implication is that Y is independent of Eg given Z,
which means that the observation Z = z cannot be distinguished from the intervention Fz = set(z).
(iii) The following argument was developed by D. Galles. Consider the augmented diagram
G's to which the intervention arcs F,-»Z are added. If (F^ALY\W, X)^, then pr(y|.!c,z, w)=
pr(y\x, w). If (YALZ\X, W)^-^ and (FzX7!w' X)o'x, there must be an unblocked path from a
member Fz- of Fz to Y that passes either through a head-to-tail junction at Z', or a head-to-head
junction at Z'. If there is such a path, let P be the shortest such path. We will show that P will
violate some premise, or there exists a shorter path, either of which leads to a contradiction.
If the junction is head-to-tail, that means that (Y'^Z''\W, X)os but (YlLZ'\W,X)ey^. So,
there must be an unblocked path from Y to Z' that passes through some member Z" of Z(W) in
either a head-to-head or a tail-to-head junction. This is impossible. If the junction is head-to-head,
then some descendant of Z" must be in W for the path to be unblocked, but then Z" would not


## PDF page 19

Causal diagrams/or empirical research 
687
be in Z(W). If the junction is tail-to-head, there are two options: either the path from Z' to Z"
ends in an arrow pointing to Z", or in an arrow pointing away from Z". If it ends in an arrow
pointing away from Z", then there must be a head-to-head junction along the path from Z' to Z".
In that case, for the path to be unblocked, W must be a descendant of Z", but then Z" would not
be in Z(W). If it ends in an arrow pointing to Z", then there must be an unblocked path from Z"
to Y in Gjc that is blocked in G^z^- If this is true, then there is an unblocked path from Fz" to
V that is shorter than P, the shortest path.
If the junction through Z' is head-to-head, then either Z' is in Z[W), in which case that junction
would be blocked, or there is an unblocked path from Z' to Y in Gxzv») ^lat ls blocked in Gs.
Above, we proved that this could not occur. So (YJiLZ\X, W)^^, implies (Fz-U-7!w' ^GS' and
thus pt(y\x,£,w)=pi(y\x,w).
REFERENCES
ANGRIST, J. D., IMBENS, G. W. & RUBIN, D. B. (1995). Identification of causal effects using instrumental
variables. J. Am. Statist. Assoc. To appear.
BALKE, A. & PEARL, J. (1994). Counterfactual probabilities: Computational methods, bounds, and applications.
In Uncertainty in Artificial Intelligence, Ed. R. Lopez de Mantaras and D. Poole, pp. 46-54. San Mateo,
CA: Morgan Kaufmann.
BOWDEN, R. J. & TURKINGTON, D. A. (1984). Instrumental Variables. Cambridge, MA: Cambridge
University Press.
Cox, D. R. (1958). The Planning of Experiments. New York: John Wiley.
Cox, D. R. (1992). Causality: Some statistical aspects. J. R. Statist. Soc. A 155, 291-301.
Cox, D. R. & WERMUTH, N. (1993). Linear dependencies represented by chain graphs. Statist. Sci. 8, 204-18.
DAWID, A. P. (1979). Conditional independence in statistical theory (with Discussion). J. R. Statist. Soc. B
41, 1-31.
FISHER, F. M. (1970). A correspondence principle for simultaneous equation models. Econometrica 38, 73-92.
FREEDMAN, D. (1987). As others see us: A case study in path analysis (with Discussion). J. Educ. Statist.
12,101-223.
FRISCH, R. (1938). Statistical versus theoretical relations in economic macrodynamics. League of Nations
Memorandum. Reproduced (1948) in Autonomy of Economic Relations, Universitetets Socialokonomiske
Institutt, Oslo.
GALLES, D. & PEARL, J. (1995). Testing identifiability of causal effects. In Uncertainty in Artificial Intelligence—
11, Ed. P. Besnard and S. Hanks, pp. 185-95. San Francisco, CA: Morgan Kaufmann.
GEIGER, D., VERMA, T. S. & PEARL, J. (1990). Identifying independence in Bayesian networks. Networks
20,507-34.
GOLDBERGER, A. S. (1972). Structural equation models in the social sciences. Econometrica 40, 979-1001.
HAAVELMO, T. (1943). The statistical implications of a system of simultaneous equations. Econometrica 11,
1-12.
HOLLAND, P. W. (1988). Causal inference, path analysis, and recursive structural equations models. In
Sociological Methodology, Ed. C. Clogg, pp. 449-84. Washington, D.C.: American Sociological Association.
IMBENS, G. W. & ANGRIST, J. D. (1994). Identification and estimation of local average treatment effects.
Econometrica 62, 467-76.
LAURTTZEN, S. L., DAWID, A. P., LARSEN, B. N. & LEIMER, H. G. (1990). Independence properties of directed
Markov fields. Networks 20, 491-505.
LAURITZEN, S. L. & SPIEGELHALTER, D. J. (1988). Local computations with probabilities on graphical struc-
tures and their applications to expert systems (with Discussion). J. R. Statist. Soc. B 50, 157-224.
MANSKI, C. F. (1990). Nonparametric bounds on treatment effects. Am. Econ. Rev., Papers Proc. 80, 319-23.
PEARL, J. (1988). Probabilistic Reasoning in Intelligent Systems. San Mateo, CA: Morgan Kaufmann.
PEARL, J. (1993a). Belief networks revisited. Artif. Intel. 59, 49-56.
PEARL, J. (1993b). Comment: Graphical models, causality, and intervention. Statist. Sci. 8, 266-9.
PEARL, J. (1994a). From Bayesian networks to causal networks. In Bayesian Networks and Probabilistic
Reasoning, Ed. A. Gammerman, pp. 1-31. London: Alfred Walter.
PEARL, J. (1994b). A probabilistic calculus of actions. In Uncertainty in Artificial Intelligence, Ed. R. Lopez
de Mantaras and D. Poole, pp. 452-62. San Mateo, CA: Morgan Kaufmann.
PEARL, J. (1995). Causal inference from indirect experiments. Artif. Intel. Med. J.^ T'^'b-l'-fS^, /?^"
PEARL, J. & VERMA, T. (1991). A theory of inferred causation. In Principles of Knowledge Representation and
Reasoning: Proceedings of the 2nd International Conference, Ed. J. A. Alien, R. Fikes and E. Sandewall,
pp. 441-52. San Mateo, CA: Morgan Kaufmann.


## PDF page 33

Discussion of paper by J. Pearl 
701
conditionally randomised experiment were conducted. Typically, linear models are used, and par-
ameters or functions of these interpreted as unit or average effects, direct or total. A few workers
argue if endogenous variables are viewed as causes, these should be treated as exogenous, and a
new hypothetical system, absent equations for these variables, considered. As the effects are defined
in the new system, assumptions about the relationship between parameters of the old pre-
intervention and new post-intervention systems are needed (Sobel, 1990).
Pearl neatly extends this argument. His equation (5) specifies the post-intervention probabilities
pr(xi,..., x,, | xQ in terms of the model based pre-intervention probabilities. The effects of X, on
X, are comparisons of pr(x^|x,') with pr(jc,|x*), where x[ and x* are distinct values of X,. If
(-YI, ..., X,) is observed, pr(x^|x,') is identified; Pearl considers the nontrivial case, giving sufficient
conditions for identifiability.
Pearl suggests his results are equivalent to those in Rubin's model for causal inference. For
example, he claims that the back-door criterion is 'equivalent to the ignorability condition of
Rosenbaum & Rubin (1983)'; if so, it should follow that
pr(x^|x,',w)=pr(xjw),
the probability if all units in the subpopulation W=w take value x; of the cause. Thus,
pr(x^|x,')=pr(x^).
But strong ignorability, given covariates W, implies
pr(x^.|x,',w)=pr(x^|w);
the back-door criterion implies pr(x^|x,', w) = pr(x^|x,', w). Neither condition implies the other; the
two are only equivalent if
pr(xjw)=pr(x,|x,',w).
The assumption
pr(xjw)=pr(xj.|x;,w),
and others like these, is the basis on which the paper rests, and for the equivalence claims made;
such quantities need not be identical.
Suppose ignorability and the back-door criterion hold above. Then
pr(xjw) = pr(x^.|x;, w);
equality is now a conclusion. If W is observed, ignorability implies
pr(xjw)=pr(x^.|x;,w),
which can be computed directly. The problematic case in observational studies occurs when some
covariates are unobserved. But supplementing ignorability with assumptions like those in this paper
helps to identify effects in Rubin's model in such cases. To simplify, only atomic interventions will
be considered and the outcome treated as a scalar quantity. Only the back-door criterion is con-
sidered, but Theorem 2, for example, could also be handled.
2. IGNORABILITY AND THE BACK-DOOR CRITERION
For an atomic intervention, rule 2, which supports the back-door criterion, is
pr(Xj.|x;,w)=pr(x^|x,',w) 
(1)
if (Xj^LXi\W]o^ . Assume, following Pearl's discussion of the back-door criterion, that W is
observed. Ostensibly, (1) looks similar to the assumption of strongly ignorable treatment assign-
ment: Xj^ALX,\ W for all values x, of Z,, 0 < pr(X, = x,| W= w) for all (x., w).


## PDF page 34

702 
Discussion of paper by J. Pearl
LEMMA 1. Equality in (1) holds if PA, ^ W,
X^(PA,\W)\(X,, W). 
(2)
Proof. This follows from
. 
, .,. 
v pr(Xj| w, x,', pa,\w) pr(w, x;, pa,\w)
^'"'•^i——————pr^——————• 
(3)
D
LEMMA 2. JfPA, ^ W, the independence conditions in (I) and (2) are equivalent.
Proof. Suppose (2) holds in G. In G^, any path p from -X", to X j has the form X,<-M ... -*Xj,
where M e PA,. If M e PA\W, the subpath M ... -»Xj in G is blocked by W, hence p is blocked
by W in Gx,. Otherwise, p is a subpath of I -> Z, <- M... -* X j in G, I e PA,\ W, which is blocked by
W as it has arrows converging to X,, implying p is blocked by W in G^. Conversely, in G any
path p* from ; to Z, has form (a) 1... -rX,-r... --X,, (b) 1... ->-Z,<-M ... --Z,, or (c) 1... -rXp
where X, does not appear. Here X, blocks type (a) paths. Type (b) paths contain subpaths
X, <- M ... -> Xj; by hypothesis, W blocks these in G^, implying W blocks p* in G. Type (c)
paths are subpaths of -X"; •<-;... ->Xj; by hypothesis, W blocks these in G^, implying W blocks
p* in G. 
D
THEOREM. If treatment assignment is strongly ignorable, given (W, PA,\W), where PA,\W^ 0 is
unobserved, (2) above holds, and no node in W is a descendant of X,, pr(x^,) is identified, and
P^i^^P^x',).
Proof. We have
pr(x^.| x',, w, pa,\w) = pr(x,^ | w, pa,\w), 
(4)
pt(Xj\x',, w, pa,\w) = pr(xj.|x;, w), 
(5)
where (4) follows from strong ignorability and (5) from (2); jointly, (4) and (5) imply
Pr(^; I w, pa,\w) == pr(x,^ | w) = pr(x,| x,', w). 
(6)
Since no node in W is a descendant of X,,
P^].) = £ P^jW'w) Pr(w) = pr(Xj|x,'). 
D
W
^Received May 1995]
Rejoinder to Discussions of 'Causal diagrams for empirical research9
BY JUDEA PEARL
Cognitive Systems Laboratory, Computer Science Department, University of California,
Los Angeles, California 90024, U.S.A.
1. GENERAL
The subject of causality seems inevitably to provoke controversy among scientists, perhaps
because causality is so essential to our thought and yet so seldom discussed in the technical


# https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf

Read complete Fine Point6.1 (printed78), Technical Point7.1 (88), and complete Technical Point7.4 frontdoor proof (101). The source uses SWIG fixed interventions; the local proof keeps genuine exogenous-coordinate product law for random mediator evaluation.

## PDF page 87

78
Graphical representation of causal effects
Fine Point 6.1
D-separation. We define a path to be either blocked or open according to the following graphical rules.
1. If there are no variables being conditioned on, a path is blocked if and only if two arrowheads on the path collide
at some variable on the path. In Figure 6.1, the path L →A →Y is open, whereas the path A →Y ←L is
blocked because two arrowheads on the path collide at Y . We call Y a collider on the path A →Y ←L.
2. Any path that contains a non-collider that has been conditioned on is blocked. In Figure 6.5, the path between
A and Y is blocked after conditioning on B. We use a square box around a variable to indicate that we are
conditioning on it.
3. A collider that has been conditioned on does not block a path. In Figure 6.7, the path between A and Y is open
after conditioning on L.
4. A collider that has a descendant that has been conditioned on does not block a path. In Figure 6.8, the path
between A and Y is open after conditioning on C, a descendant of the collider L.
Rules 1–4 can be summarized as follows. A path is blocked if and only if it contains a non-collider that has been
conditioned on, or it contains a collider that has not been conditioned on and has no descendants that have been
conditioned on. Two variables are d-separated if all paths between them are blocked (otherwise they are d-connected).
Two sets of variables are d-separated if each variable in the first set is d-separated from every variable in the second set.
Thus, A and L are not d-separated in Figure 6.1 because there is one open path between them (L →A), despite the
other path (A →Y ←L)’s being blocked by the collider Y . In Figure 6.4, however, A and Y are d-separated because
the only path between them is blocked by the collider L.
The relationship between statistical independence and the purely graphical concept of d-separation relies on the
causal Markov assumption (Technical Point 6.1): In a causal DAG, any variable is independent of its non-descendants
conditional on its parents. Pearl (1988) proved the following fundamental theorem: The causal Markov assumption
implies that, given any three disjoint sets A, B, C of variables, if A is d-separated from B conditional on C, then A
is statistically independent of B given C. The assumption that the converse holds, i.e., that A is d-separated from B
conditional on C if A is statistically independent of B given C, is a separate assumption—the faithfulness assumption
described in Fine Point 6.2. Under faithfulness, A is conditionally independent of Y given B in Figure 6.5, A is not
conditionally independent of Y given L in Figure 6.7, and A is not conditionally independent of Y given C in Figure
6.8. The d-separation rules (‘d-’ stands for directional) to infer associational statements from causal diagrams were
formalized by Pearl (1995). An equivalent set of graphical rules, known as “moralization”, was developed by Lauritzen
et al. (1990).
problems and guide data analyses. In fact, the formulas that we described in
Chapter 2 to quantify treatment effects—standardization and IP weighting—
can also be derived using causal graphs theory, as part of what is sometimes
referred to as the do-calculus. Therefore, our choice of counterfactual theory
Pearl (2009) reviews quantitative
methods for causal inference that
are derived from graph theory.
in Chapters 1-5 did not really privilege one particular approach but only one
particular notation.
Regardless of the notation used (counterfactuals or graphs), exchangeabil-
ity, positivity, and consistency are conditions required for causal inference via
standardization or IP weighting. If any of these conditions does not hold, the
numbers arising from the data analysis may not be appropriately interpreted
as measures of causal effect. In the next section (and in Chapters 7 and 8) we
discuss how the exchangeability condition is translated into graph language.
Here we focus on positivity and consistency.
Unfortunately, causal graphs cannot encode violations of positivity except
in special cases, e.g, when positivity is violated because a treatment A hap-


## PDF page 97

88
Confounding
Technical Point 7.1
Does conditional exchangeability imply the backdoor criterion? That L satisfies the backdoor criterion always
implies conditional exchangeability given L, even in the absence of faithfulness. In the main text we also said that,
given faithfulness, conditional exchangeability given L implies that L satisfies the backdoor criterion. This last sentence
is true under an FFRCISTG model (see Technical Point 6.2). In contrast, under an NPSEM-IE model, conditional
exchangeability can hold even if the backdoor criterion does not, as is the case in a causal DAG with nodes A, L, Y and
arrows A →L, A →Y . In this book we always assume an FFRCISTG model and faithfulness, unless stated otherwise.
This difference between causal models is due to the fact that the NPSEM-IE, unlike an FFRCISTG model, assumes
cross-world independencies between counterfactuals. However a cross-world independence can never be verified, even in
principle, by any randomized experiment, which was the very reason that Robins (1986, 1987) did not assume cross-world
independencies in his FFRCISTG model. We will return to this issue in Chapter 23.
number of subsets that must be tried in order to answer the question.)
Let us now relate the backdoor criterion (i.e., exchangeability) to confound-
ing. The two settings in which the backdoor criterion is satisfied are
1. No common causes of treatment and outcome. In Figure 6.2, there are
no common causes of treatment and outcome, and hence no backdoor
paths that need to be blocked. Then the set of variables that satisfies
the backdoor criterion is the empty set and we say that there is no con-
founding.
2. Common causes of treatment and outcome but a subset L of measured
non-descendants of A suffices to block all backdoor paths. In Figure 7.1,
the set of variables that satisfies the backdoor criterion is L. Thus, we
say that there is confounding, but that there is no residual confounding
whose elimination would require adjustment for unmeasured variables
(which, of course, is not possible). For brevity, we say that there is no
unmeasured confounding.
The first setting describes a marginally randomized experiment in which
confounding is not expected because treatment assignment is solely deter-
mined by the flip of a coin—or its computerized upgrade: the random number
generator—and the flip of the coin cannot cause the outcome. That is, when the
treatment is unconditionally randomly assigned, the treated and the untreated
are expected to be exchangeable because no common causes exist or, equiva-
lently, because there are no open backdoor paths. Marginal exchangeability,
i.e., Y a⊥⊥A, is equivalent to no common causes of treatment and outcome.
The second setting describes a conditionally randomized experiment in
which the probability of receiving treatment is the same for all individuals
with the same value of L but, by design, this probability varies across values
of L, that is there is an arrow L →A. This experimental design guarantees
confounding if L is also either a cause of the outcome (as in Figure 7.1) or the
descendant of an unmeasured cause of the outcome as in Figure 7.2. Hence,
there are open backdoor paths.
However, conditioning on the covariates L
will block all backdoor paths and therefore conditional exchangeability, i.e.,
Y a⊥⊥A|L, will hold. We say that a set L of measured non-descendants of A
is a sufficient set for confounding adjustment when conditioning on L blocks
all backdoor paths—that is, the treated and the untreated are exchangeable
within levels of L.


## PDF page 110

7.6 Confounding adjustment
101
Technical Point 7.4
The front door criterion. The causal diagram in Figure 7.14 depicts a setting in which the treatment A and the
binary outcome Y share an unmeasured cause U, and in which there is a variable M that fully mediates the effect of
A on Y and that shares no unmeasured causes with either A or Y . Under this causal structure, a data analyst cannot
directly use standardization (nor IP weighting) to compute the counterfactual risks Pr

Y a=1 = 1

and Pr

Y a=0 = 1

because the variable U, which is necessary to block the backdoor path between A and Y , is not available. Therefore,
the average causal effect of A on Y cannot be identified using the methods described in previous chapters. However,
Pearl (1995) showed that Pr [Y a = 1] is identified by the so-called front door formula
X
m
Pr [M = m|A = a]
X
a′
Pr [Y = 1|M = m, A = a′] Pr [A = a′]
Pearl refers to this identification formula as front door adjustment because it relies on the existence of a path from A
and Y that, contrary to a backdoor path, goes through a descendant M of A that completely mediates the effect of A on
Y . Pearl often uses the term backdoor formula to refer to the identification formula that we refer to as standardization
or the point treatment g-formula (Robins 1986). A proof of the front door identification formula follows.
Note that Pr [Y a = 1] = P
m Pr [M a = m] Pr [Y a = 1|M a = m] and that, under Figure 7.14, Pr [M a = m] =
Pr [M = m|A = a] because there is no confounding for the effect of A on M (i.e., A⊥⊥M a), and Pr [Y a = 1|M a = m] =
P
a′ Pr [Y = 1|M = m, A = a′] Pr [A = a′].
To prove the last equality, first note that Pr [Y a = 1|M a = m] =
Pr [Y m = 1] because (i) Y a = Y m when M a = m (A affects Y
only through M in Figure 7.14) and (ii)
Y m⊥⊥M a by d-separation on a SWIG under the joint intervention in which M is set to m and A to a.
Fi-
nally, by conditional exchangeability Y m⊥⊥M|A on the SWIG where we intervene on M alone, Pr [Y m = 1] =
P
a′ Pr [Y = 1|M = m, A = a′] Pr [A = a′].
The above proof requires well-defined counterfactual outcomes Y m under interventions on M. In Technical Points
21.11 and 21.12 we present alternative proofs of the front door formula that do not require this condition.


# https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf

Read complete Lecture9 §9.2 Definition9.1, Easy Fact, Splice Lemma9.2 and its proof, and §9.3/Theorem9.3 proof (printed35–37). Source Borel-disintegration assertion is not imported; supplied-kernel generalization is proved locally.

## PDF page 36

Lecture 9
February 14
9.1
Markov Chains: Big Picture
state space S
discrete time
continuous time
ﬁnite
very similar
very similar
countable
our focus
similar
general: measure theory
(∗)
doesn’t exist
general: topology
(∗)
SDE (starting from BM)
semigroup setting
We will do a little of the sections marked (∗).
9.2
Measure Theory Background
“X and Y are independent” means “σ(X) and σ(Y ) are independent”.
Deﬁnition 9.1. X and Y are conditionally independent (CI) given G means
E[h(X)g(Y ) | G] = E[h(X) | G]E[g(Y ) | G]
∀bounded, measurable g, h.
This is equivalent to
E[g(Y ) | G, X] = E[g(Y ) | G]
∀bounded, measurable g.
(9.1)
Idea: Given G, knowing also X gives no extra information about Y .
Easy Fact. If X and Y are CI given G, if V is G-measurable, then X and (Y, V ) are CI given G.
Recall. µ is a PM on S1 × S2. µ1 is the marginal PM on S1. Q is a kernel Q(s1, B) from S1 →S2. There is
a one-to-one correspondence µ ↔(µ1, Q).
Lemma 9.2 (The Splice Lemma). Given spaces S1, S2, S3 (Borel spaces), given a PM µ1,2 on S1 × S2
and a PM µ2,3 on S2 × S3 such that their marginals on S2 are identical, then there exists a unique PM
µ on S1 × S2 × S3 such that, for µ = dist(X1, X2, X3),
• dist(X1, X2) = µ1,2 and dist(X2, X3) = µ2,3, and
• X1 and X2 are CI given X2.
35


## PDF page 37

LECTURE 9. FEBRUARY 14
36
Proof. Consider (S1 × S2) × S3. Specify µ by
• the marginal on S1 × S2 is µ1,2,
• the kernel Q from S1 × S2 to S3 is Q((s1, s2), B) = Q2,3(s2, B), where Q2,3 is the kernel S2 →S3
associated with µ2,3.
This speciﬁes µ. Then,
E[h(X3) | (X1, X2)] =
Z
h(x)Q((X1, X2), dx) =
Z
h(x)Q2,3(X2, dx)
= E[h(X3) | X2].
We have checked (9.1), which implies CI. The calculation also says that dist(X2, X3) = µ2,3.
Exercise: Prove uniqueness.
9.3
Existence of General Markov Chains (Borel Spaces)
Theorem 9.3 (Existence of General Markov Chains (Borel Spaces)). Given Borel S0, S1, S2, . . . , given
a PM µ0 on S0, given kernels Qn from Sn to Sn+1 (each n ≥0), there exists (X0, X1, X2, . . . ), unique
in distribution, such that
(a) dist(X0) = µ0,
(b) Qn is the conditional probability kernel for Xn+1 given Xn,
(c) Xn+1 and (X0, X1, . . . , Xn−1) are CI given Xn (all n ≥1),
(d) (Xn, Xn+1, . . . ) and Fn are CI given Xn.
Proof. Suppose (induction) we have constructed (X0, X1, . . . , Xn).
Apply the Splice Lemma 9.2 to
(X0, X1, . . . , Xn−1) and Xn and Xn+1. We have a joint distribution for (X0, X1, . . . , Xn−1) and Xn.
The joint distribution of Xn and Xn+1 is speciﬁed by dist(Xn) and the kernel Qn. The Splice Lemma
implies the existence of dist(X0, X1, . . . , Xn, Xn+1) with the CI property. Apply the Kolmogorov Ex-
tension Theorem to get dist(X0, X1, X2, . . . ).
(c) gives the “one-step ahead”property, but we want the analog for the entire future.
Write Fn = σ(X0, X1, . . . , Xn). (c) and the “Easy Fact” imply
(c’) Fn and (Xn, Xn+1) are CI given Xn.
Claim (d): By MT, it is enough to prove, for each m,
(d’) (Xn, Xn+1, . . . , Xn+m) and Fn are CI given Xn, for all n.
Use induction on m. The statement is true for m = 1 by (c’). We will prove the statement for m = 2.
The same argument (exercise) gives the inductive step m →m + 1.
Apply (c’) to n + 1.
E[g(Xn+1, Xn+2) | Fn+1, Xn+1] = E[g(Xn+1, Xn+2) | Xn+1]
= h(Xn+1),
say.


## PDF page 38

LECTURE 9. FEBRUARY 14
37
Condition on Fn.
E[g(Xn+1, Xn+2) | Fn] = E[h(Xn+1) | Fn] = E[h(Xn+1) | Xn]
using the m = 1 case of CI. Condition on Xn.
E[g(Xn+1, Xn+2) | Xn] = E[h(Xn+1) | Xn],
so (Xn+1, Xn+2) and Fn are CI given Xn. This is (d’) for m = 2.
In practice, we usually consider time-homogeneous chains: Sn = S, Qn = Q.
(Idea).
Given Xn0 = x0, the future process (Xn0+n, n ≥0) has the same distribution as the process
(x0 = X0, X1, X2, . . . ).
Formula. For bounded, measurable h : S∞→R,
E[h(Xn0, Xn0+1, . . . ) | Fn0] = g(Xn0),
where g(x)
def
= Eh( ˆX0, ˆX1, . . . ), where ( ˆXn, n ≥0) is the chain with X0 = x.
9.4
Elementary Examples
Recall the following elementary examples for S countable.
The kernel is speciﬁed by transition probabilities pi,j ≡p(i, j) = P(X1 = j | X0 = i) which form a transition
matrix P = (pi,j : i, j ∈S).
Example 9.4 (Random Walk on Zd). Given IID ξi, i ≥1, Zd-valued, Xn = Pn
t=1 ξt. Then, (Xn) is
Markov, p(i, j) = P(ξ = j −i). Here, S = Zd.
Example 9.5 (Renewal Chain). S = Z+ = {0, 1, 2, . . . }. Take (ξi, i ≥1) to be IID, P(ξ ≥1) = 1,
Sn = Pn
t=1 ξt. Deﬁne Xn = min{n −Sm : Sm ≤n}. This is Markov on Z+. Then,
p(i, i + 1) = P(ξ > i + 1 | ξ > i),
p(i, 0) = P(ξ = i + 1 | ξ > i).
Example 9.6 (Galton-Watson Branching Process). Given a PM µ on {0, 1, 2, . . . }, X0 = 1 (1 individual
in generation 0). In each generation, each individual has a random (dist = µ) number of oﬀspring in the
next generation. Xn is the population in generation n. This is Markov. p(i, j) = P(ξ1 +ξ2 +· · ·+ξi = j)
for IID(µ) RVs (ξi).
S is inﬁnite in 9.4 to 9.6.
Example 9.7 (Ehrenfest Urn Model). There are B balls and 2 boxes. Pick a random ball and move it
to the other box. Xn is the number of balls in the left box.
p(i, i −1) = i
B ,
p(i, i + 1) = B −i
B
.
